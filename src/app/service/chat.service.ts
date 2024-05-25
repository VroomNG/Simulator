import { Injectable, Query } from '@angular/core';
import SendBird from 'sendbird';


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  sb: any;
  // APP_ID = '4F533191-EE4F-4F17-ACBA-5C440B4FEE34';
  APP_ID = '0ECAC80D-9CF2-491B-AA64-A5BF65B416AD';

  init(id: string, nickname: string, profileUrl: string) {
  // Initialize SendBird
  this.sb = new SendBird({ appId: this.APP_ID });
  SendBird.setLogLevel(SendBird.LogLevel.ERROR);
  // Connect to SendBird using the provided user ID
  this.sb.connect(id, (user: any, error: any) => {
    if (error) {
      console.error('SendBird initialization failed:', error);
    } else {
      console.log('SendBird initialized successfully')
      console.log('current user',this.sb.currentUser)
      // Call connect after initialization
      this.connect(id, null, (error: any, user: any) => {
        if (error) {
          console.error('SendBird connection failed:', error);
        } else {
          console.log('We are connected to Sendbird servers!')   
          // Wait for a short delay before checking the connection status
          setTimeout(() => {
            console.log('Is connected:', this.isConnected());
            console.log('Connected user:', this.getConnectedUser());
          }, 2000);
        }
      });
    }
  });
  }

  connect(userId: string, token: any, callback: any) {
  this.sb.connect(userId, token, (user: any, error: any) => {
    if (error) {
      console.error('SendBird connection failed:', error);
    }
    callback(error, user);
  });
  }

  isConnected() {
    return this.sb && this.sb.currentUser && this.sb.currentUser.userId;
  }

  getConnectedUser() {
    return this.sb && this.sb.currentUser ? this.sb.currentUser : null; 
  }

  registerEventHandlers(id: string, callback: any) {
    var channelHandler = new this.sb.ChannelHandler();
    channelHandler.onMessageReceived = (channel:any, message:any) => {
      callback({
        event: 'onMessageReceived',
        data: {
          channel,
          message,
        },
      });
    };
  }

  getGroupChannels(callback: any, ) {
    const query = this.sb.GroupChannel.createMyGroupChannelListQuery();
    query.includeEmpty = true;
    query.limit = 100;

    query.next((channels: any, error: any) => {
      if (error) {
        console.error('Failed to get group channels:', error);
        callback(error, null);
      } else {
        // console.log('Group channels service:', channels);
        this.getConversations(channels, callback);
      }
    });
  }


  getConversations(channels: any[], callback: any,) {
    // let channelData: any[] = [];
    // let messageData: any[] = [];

    const promises = channels.map((channel: any) => {
      return new Promise((resolve, reject) => {
        channel.createPreviousMessageListQuery()
          .load(30, true, (messages: any[], error: any) => {
            if (error) {
              // console.error('Failed to get messages:', error);
              // reject(error);
            } else {
              console.log('user messages', channel.lastMessage?.message);
              console.log('user messages', channel.lastMessage?.mentionedMessageTemplate);
              console.log('nick name', channel.lastMessage?._sender?.nickname);
              console.log('send time stamp', channel.lastMessage?.createdAt);
              
              console.log('for ts',channel)
              // channelData = channel  
              // messageData = messages

              // console.log('messadeData', messageData)
              // console.log('channelData', channelData)
              console.log('msg',messages.splice(0, 1));

              resolve({ channel: channel, messages: messages });
            }
          });
      });
    });

    Promise.all(promises)
      .then((results: any[]) => {
        console.log('All conversations and messages:', results);
        callback(null, results);
      })
      .catch((error: any) => {
        console.error('Failed to get conversations:', error);
        callback(error, null);
      });

  }


  createGroupChannel(users: string[], isDistinct: boolean, callback: any) {
  this.sb.GroupChannel.createChannelWithUserIds(users, isDistinct, (channel: any, error: any) => {
    callback(error, channel);
  });
  }

  sendMessage(channelUrl: string, message: string, callback: any) {
  const params = new this.sb.UserMessageParams();
  params.message = message;

  this.sb.GroupChannel.getChannel(channelUrl, (channel: any, error: any) => {
    if (error) {
      console.error('Failed to get channel:', error);
      callback(error, null);
    } else {
      channel.sendUserMessage(params, (message: any, error: any) => {
        callback(error, message);
      });
    }
  });
  }

  getMessagesFromChannel(groupChannel: SendBird.GroupChannel, callback: any) {
    const listQuery = groupChannel.createPreviousMessageListQuery();
    listQuery.limit = 10;
    listQuery.includeMetaArray = true;
    listQuery.includeReaction = true;
    // Retrieving previous messages.
    listQuery.load((messages, error) => {
      callback(error, messages);
    });
  }

  getMessages(channelUrl: string, callback: any) {
    const channel = this.sb.GroupChannel.getChannel(channelUrl);
    if (!channel) {
      callback('Channel not found', null);
      return;
    }

    const messageListQuery = channel.createPreviousMessageListQuery();
    messageListQuery.limit = 30; // Number of messages to fetch
    messageListQuery.reverse = true; // Fetch messages in reverse order

    messageListQuery.load((messages: any[], error: any) => {
      if (error) {
        console.error('Failed to get messages:', error);
        callback(error, null);
      } else {
        console.log('Messages:', messages);
        callback(null, messages);
      }
    });
  }














}
