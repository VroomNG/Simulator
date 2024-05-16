import { Component, OnInit,  } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';
import SendBird from 'sendbird';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  success:boolean = false;
  failed:boolean = false;
  regular:boolean = false;
  regularMsg:any = 'Regular';

  storedString: string = '45892yuio';

  fetchSubscription!: Subscription;
  rideId: boolean = true;
  loading: boolean = false;
  alert: boolean = false;
  alertMsg: string = 'loading...';
  alertColor: string = 'primary';
  loadingState: boolean = false;

  tripStats: string = '0';
  status: string = '0';
  tripType:string = '';

  credentials = {
    trip_id: 0,
  }

  open_trips: any;
  tripResponse: any;
  ongoingTrip: any;
  canceledTrip: any;
  tripComplete: any
  rateTrip: any;

  cancelMode = false;

  userDetails: any;
  acceptTrip: boolean = true;
  startTrip: boolean = false;
  cancelTrip: boolean = false;
  completeTrip: boolean = false;

  step1Active: boolean = true;
  step2Active: boolean = false;
  step3Active: boolean = false;
  step4Active: boolean = false;
  step5Active: boolean = false;

  latitude: number = 6.523900071563629;
  longitude: number = 3.3800615591471472; 

  groupChannels: any[] = [];
  isChat:boolean = false;
  isCall:boolean = false;
  connected = false;
  startConversationResult: string | undefined;
  conversations: Array<SendBird.GroupChannel> | null | undefined;
  listConversationsResult: string | null | undefined;
  selectedChannel: SendBird.GroupChannel | null | undefined;

  myChannels:any;
  myMessages:any;

  messages: Array<
    SendBird.UserMessage | SendBird.FileMessage | SendBird.AdminMessage
  > | null | undefined;
  textMessage: any;
  chatDialogue:boolean = false;
  successMsg:any = 'Success'
  errorMsg:any = 'Failed'

  messageCollection: SendBird.MessageCollection | undefined;


  constructor(
    private Dashboard: DashboardService,
    private router:Router, 
    private chatService: ChatService
  ) { }

  ngOnInit() {
  
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('User details:', this.userDetails);

      const { user_uuid, first_name, last_name, profile_url } = this.userDetails;
      const id = user_uuid;
      const nickname = first_name + ' ' + last_name;
      const profileUrl = profile_url;

      this.chatService.init(id, nickname, profileUrl);

     setTimeout(() => {
      // this.getGroupChannels();
      this.connectToSendbird(id);
     },3000)

     setTimeout(() => {
   

     },3500)
    } else {
      console.log('User details not found in localStorage.');
    }

   }

   selectChannel(channel: SendBird.GroupChannel) {
    this.selectedChannel = channel;
    this.chatService.getMessages(channel.url, (error: any, messages: any[]) => {
      if (error) {
        console.error('Failed to get messages:', error);
      } else {
        this.messages = messages;
        console.log('Messages in channel', channel.url, this.messages);
      }
    });
  }
  

//  openChat(trip_id:any){
//     this.chatDialogue = !this.chatDialogue;
//  }
 connectToSendbird(userId: string) {
   this.chatService.connect(userId, null, (error: any, user: any) => {
     if (error) {
       console.error('SendBird connection failed:', error);
     } else {
       console.log('SendBird connected successfully');
       this.connected = true;
       this.registerEventHandlers();
       this.getMyConversations();
     }
   });
 }
 registerEventHandlers() {
   try {
     this.chatService.registerEventHandlers(
       '123',
       (data: { event: string; data: any }) => {
         console.log('New event: ' + data.event, data.data);
         if (this.selectedChannel) {
           if (data.event == 'onMessageReceived' && this.messages) {
             if (data.data.channel.url == this.selectedChannel.url) {
               this.messages.push(data.data.message);
               console.log('successfully registered',this.messages);
             }
           }
         }
       }
     );
   } catch (error) {
     console.error('Error registering event handlers:', error);
   }
 }

 startConversation() {
   const otherUserId = '123df1d5-5382-4be0-9b0c-6fd1547a308c'; // Replace with the other user's ID
   const userId = this.userDetails.user_uuid;

   console.log('User id:', userId);
   console.log('Other user id:', otherUserId);

   this.chatService.createGroupChannel([userId, otherUserId], true, (error: any, channel: any) => {
     if (error) {
       console.error('Failed to create group channel:', error);
     } else {
       console.log('Group channel created successfully:', channel);

       // Now, you can send a message to the group channel
       const message = this.textMessage;
       this.chatService.sendMessage(channel.url, message, (error: any, message: any) => {
         if (error) {
           console.error('Failed to send message:', error);
         } else {
           console.log('Message sent successfully:', message);
           this.startConversationResult = 'Conversation created';
          //  this.getMyConversations();
         }
       });
     }
   });
 }

 channelist:any;
 
 getMyConversations() {
   this.chatService.getGroupChannels(
     (
       error: SendBird.SendBirdError,
       groupChannels: Array<SendBird.GroupChannel>
     ) => {
       if (error) {
         this.listConversationsResult = 'Unable to get your conversations';
       } else {
         this.conversations = groupChannels;
         console.log('channels & messages',groupChannels);
         console.log('channels loop',groupChannels[0]);
         
        //  groupChannels.map((channel) => {
        //    channel.name
        //    console.log('mapped channnel ',channel['name'])
        //  })
       }
     }
   );
   
 }

 

 getMessages(channel: SendBird.GroupChannel) {
   this.selectedChannel = channel;
   this.chatService.getMessagesFromChannel(
     channel,
     (
       error: SendBird.SendBirdError,
       messages: Array<
         SendBird.UserMessage | SendBird.FileMessage | SendBird.AdminMessage
       >
       
     ) => {
       if (!error) {
         this.messages = messages;
         console.log('my messages',messages)
       }
     }
   );
 }

 updateTextMessage(event: any) {
   const value = event.target.value;
   if (!value || !this.selectedChannel) {
     return;
   }
   this.textMessage = value;
 }

 sendMessageToChannel(channelUrl: string) {
   const message = 'Hello from SendBird!';
   this.chatService.sendMessage(channelUrl, message, (error: any, message: any) => {
     if (error) {
       console.error('Failed to send message:', error);
     } else {
       console.log('Message sent successfully:', message);
     }
   });
 }
   
   
  reload(){
    window.location.reload()
  }

  getOpenTrip() {
    const trip_id = this.credentials.trip_id

    setTimeout(() => {
      this.loading = true
      this.rideId = !this.rideId
    }, 500)

    setTimeout(() => {
      this.Dashboard.getOpenTripsById(trip_id).subscribe(
        (res: any) => {
          console.log('response',res)
          const message = res.data.message

          if(res.status == 200){
            this.open_trips = res.data

            this.rideId = false;
            this.loading = false;

            this.success = true;
            this.successMsg =  message;

            setTimeout(()=>{
              this.success = false
            },2000)
             
          }
        },(error: any) => {

          console.error('An error occurred:', error);
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          this.failed = true;
          this.errorMsg = message;
          
          this.regular = true;
          this.regularMsg = 'No Trip Found!!'

          setTimeout(() => {
            this.failed = false
            this.regular = false
            window.location.reload()
          }, 30000);
          this.loading = false;
        }

      )
    }, 1500)

  }


  getTripStatus(trip_id: number, longitude: number, latitude:number) {


    if (this.fetchSubscription && !this.fetchSubscription.closed) {
      this.fetchSubscription.unsubscribe(); // Stop previous polling if it exists
    }

    this.fetchSubscription = interval(1000).pipe(

      switchMap(() => this.Dashboard.getTripStatus(trip_id,latitude,longitude))
    ).subscribe(
      (res: any) => {
        console.log('trip status', res);
        console.log('polling...'),
          this.tripStats = res.data.trip_status_code;
          this.tripType = res.data.trip.payment_type;

        console.log('trip status code', this.tripStats);
        console.log('trip type', this.tripType);
      }
    );
  }

  acceptTripFunction(tripId: any) {
    this.alert = true
    this.alertMsg = 'accpeting trip...'
    this.alertColor = 'primary'

    const trip_id = tripId;
    const latitude = this.latitude
    const longitude = this.longitude

    setTimeout(() => {
      this.Dashboard.accceptTripReq(trip_id,latitude,longitude).subscribe(
        (res: any) => {
          console.log('accept trip res', res)
          const message = res.data.message
          this.tripResponse = res.data.trip.security_code;
          console.log('trip response detais', this.tripResponse)

          if (res.success == true) {
            this.success = true;
            this.successMsg = message

            this.loadingState = !this.loadingState
            this.alert = false;

            this.isChat = !this.isChat

            setTimeout(() => {
              this.success = false
              this.getTripStatus(trip_id,longitude,latitude)
            }, 1000);

            this.acceptTrip = !this.acceptTrip
            this.startTrip = !this.startTrip
            console.log('trip response detais', this.tripResponse)
          } 
          else if (res.success == false){
            this.failed = true;
            this.errorMsg = message;

            setTimeout(()=>{
              window.alert('failed to accept trip')
            },1000)

            setTimeout(() => {
              this.failed = false
              this.alert = false
              this.getTripStatus(trip_id,longitude,latitude)
            }, 2000);
          }
        },(error:any)=>{
          console.log('accept trip error', error)
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);
          console.error('http:', error.error.data.trip.uuid);

          const message = error.error.data.message
          const ongoingTripId = error.error.data.trip.uuid 


          this.alert = true;
          this.failed = true;
          this.errorMsg = message;

          this.regular = true;
          this.regularMsg = 'Ongoing trip id '+ ongoingTripId

          setTimeout(() => {
            this.failed = false
           
          }, 5000);   
        }
      )
    }, 1500);
  }

  startTripFunction(tripId: number) {

    const trip_id = tripId;
    this.alert = true
    this.alertMsg = 'Starting your trip...'
    this.alertColor = 'primary'

    const formData = {
      security_code: this.tripResponse
    }
    setTimeout(() => {
      this.Dashboard.startTrip(trip_id, formData).subscribe(
        (res: any) => {
          console.log('start trip res', res)
          const message = res.data.message
        
          if (res.success === true) {
            this.step2Active = true

            this.success = true;
            this.successMsg = message

            setTimeout(() => {
              this.alert = false
              this.success = false
            }, 2000);

            this.startTrip = !this.startTrip
            this.completeTrip = !this.completeTrip
            this.cancelTrip = !this.cancelTrip
            this.ongoingTrip = res.data.trip
            console.log('ongoing trip detais', this.ongoingTrip)
          }  else if (res.success == false){
            
            this.failed = true;
            this.errorMsg = message;

            setTimeout(() => {
              this.failed = false             
            }, 2000);
          }
        },(error:any)=>{

          console.log('Start trip error', error)
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          this.failed = true;
          this.errorMsg = message;

          setTimeout(() => {
            this.failed = false
            // window.location.reload()
          }, 2000);
        }
      )
    }, 1500);

  }

  stopFetching() {
    if (this.fetchSubscription && !this.fetchSubscription.closed) {
      this.fetchSubscription.unsubscribe();
      console.log('Subscription closed.');
    }
  }

  tripCompleteFunction(tripId: number) {

    this.alert = true
    this.alertMsg = 'Rounding up your trip...'
    this.alertColor = 'primary'
    const trip_id = tripId;

    const formData = {
      stop_lat: 6.447809299999999,
      stop_long:  3.4723495,
      stop_address: "Victoria Arobieke St, Lekki Phase I, Lekki 106104, Lagos, Nigeria",
      stop_title: " Lekki Phase I, Lekki 106104, Lagos, Nigeria",
    }

    setTimeout(() => {
      this.Dashboard.completeTrip(trip_id, formData).subscribe(
        (res: any) => {
          console.log('complete trip res', res)
          const message = res.data.message
   
          if (res.success === true) {
            this.alertMsg = 'Trip Complete'
            this.alertColor = 'success'

            this.success = true;
            this.successMsg = message;
            this.step3Active = true;

            setTimeout(() => {
              this.alert = false
              this.success = false
            }, 2000);

            this.completeTrip = !this.completeTrip
            this.cancelTrip = !this.cancelTrip

            this.tripComplete = res.data.trip

            this.rateTrip = !this.rateTrip
            console.log('completed trip detais', this.tripComplete)
          } 
          else if (res.success == false){
            this.failed = true;
            this.errorMsg = message;

            setTimeout(() => {
              this.failed = false
              
            }, 2000);
          }
        },(error:any)=>{

          console.log('Complete Trip error', error)
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          this.failed = true;
          this.errorMsg = message;

          setTimeout(() => {
            this.failed = false

          }, 2000);
        }
      )
    }, 2000);


  }

  tripCompleteInit(tripId: number) {

    switch (this.tripType) {
      case 'cash':
        alert('cash payment');
        const cashPayload  = {
            stop_lat: 3.403664923449183,
            stop_long: 3.403664923449183,
            stop_title: "Lagos Island",
            stop_address: "11 Military St, Lagos Island, Lagos 102273, Lagos, Nigeria"
        }
        this.Dashboard.cashPayment(tripId, cashPayload).subscribe(
          (res: any) => {
            console.log('cash pay', res)
            const message = res.data.message
  
            if (res.success === true) {
  
              this.alertMsg = message
              this.alertColor = 'success'
  
              this.step3Active = true
  
              this.success = true
              this.successMsg = message
  
              setTimeout(() => {
                this.alert = false;
                this.success = false;
                this.stopFetching()
              }, 2000);

  
              console.log('cash pay res message', res.data.message)
              
            } else if (res.success == false){
              this.failed = true;
              this.errorMsg = message;
  
              setTimeout(() => {
                this.failed = false
              }, 2000);
            }
          },(error:any)=>{
  
            console.log('cash pay error', error)
            console.error('status:', error.status);
            console.error('success:', error.error.success);
            console.error('message:', error.error.message);
            console.error('http:', error.error.data.message);
  
            const message = error.error.data.message
            this.failed = true;
            this.errorMsg = message;
  
            setTimeout(() => {
              this.failed = false
            }, 2000);
          }
        )
        break;
      case 'card':
        alert('card payment');
        const cardPayload  = {
          stop_lat: 3.403664923449183,
          stop_long: 3.403664923449183,
          stop_title: "Lagos Island",
          stop_address: "11 Military St, Lagos Island, Lagos 102273, Lagos, Nigeria"
        }
        this.Dashboard.cardPayment(tripId, cardPayload ).subscribe(
          (res: any) => {
            console.log('card pay', res)
            const message = res.data.message
  
            if (res.success === true) {
  
              this.alertMsg = message
              this.alertColor = 'success'
  
              this.step3Active = true
  
              this.success = true
              this.successMsg = message
  
              setTimeout(() => {
                this.alert = false
                this.success = false
                this.stopFetching()
              }, 2000);
  
              console.log('card pay res message', res.data.message)
              
            } else if (res.success == false){
              this.failed = true;
              this.errorMsg = message;
  
              setTimeout(() => {
                this.failed = false
              }, 2000);
            }
          },(error:any)=>{
  
            console.log('card pay error', error)
            console.error('status:', error.status);
            console.error('success:', error.error.success);
            console.error('message:', error.error.message);
            console.error('http:', error.error.data.message);
  
            const message = error.error.data.message
            this.failed = true;
            this.errorMsg = message;
  
            setTimeout(() => {
              this.failed = false
            }, 2000);
          }
        )
        break;
      case 'bank_transfer':
        alert('bank transfer payment');
        const bankPayload  = {
          stop_lat: 3.403664923449183,
          stop_long: 3.403664923449183,
          stop_title: "Lagos Island",
          stop_address: "11 Military St, Lagos Island, Lagos 102273, Lagos, Nigeria"
        }
        this.Dashboard.bankTransferPayment(tripId, bankPayload ).subscribe(
          (res: any) => {
            console.log('bank pay', res)
            const message = res.data.message
  
            if (res.success === true) {
  
              this.alertMsg = message
              this.alertColor = 'success'
  
              this.step3Active = true
  
              this.success = true
              this.successMsg = message
  
              setTimeout(() => {
                this.alert = false
                this.success = false
                this.stopFetching()
              }, 2000);
  
              console.log('bank pay res message', res.data.message)
              
            } else if (res.success == false){
              this.failed = true;
              this.errorMsg = message;
  
              setTimeout(() => {
                this.failed = false
              }, 2000);
            }
          },(error:any)=>{
  
            console.log('bank pay error', error)
            console.error('status:', error.status);
            console.error('success:', error.error.success);
            console.error('message:', error.error.message);
            console.error('http:', error.error.data.message);
  
            const message = error.error.data.message
            this.failed = true;
            this.errorMsg = message;
  
            setTimeout(() => {
              this.failed = false
            }, 2000);
          }
        )

        break;
      default:

    }
    
  }
  cancelTripFunction(tripId: number) {

    this.alert = true
    this.alertMsg = 'Canceling your trip...'
    this.alertColor = 'primary'

    const trip_id = tripId;

    setTimeout(() => {
      this.Dashboard.cancelTrip(trip_id, this.latitude, this.longitude).subscribe(
        (res: any) => {
          console.log('cancel trip res', res)
          const message = res.data.message

          if (res.success === true) {

            this.alertMsg = message
            this.alertColor = 'success'

            this.step4Active = true

            this.success = true
            this.successMsg = message

            setTimeout(() => {
              this.alert = false
              this.success = false
            }, 2000);


            this.completeTrip = !this.completeTrip
            this.cancelTrip = !this.cancelTrip

            this.rateTrip = !this.rateTrip

            console.log('cancel message', res.data.message)
            
          } else if (res.success == false){
            this.failed = true;
            this.errorMsg = message;

            setTimeout(() => {
              this.failed = false
            }, 2000);
          }
        },(error:any)=>{

          console.log('Cancel Trip error', error)
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          this.failed = true;
          this.errorMsg = message;

          setTimeout(() => {
            this.failed = false
            // window.location.reload()
          }, 2000);
        }
      )
    }, 2000);


  }

  rateTripFunction(trip_id: any) {

    this.stopFetching()
    setTimeout(() => {
      location.reload()
    })
  }

  next() {
    const url = `http://localhost:5173/?userid=${this.userDetails.user_uuid}`;
    window.open(url, '_blank');
  }


}
