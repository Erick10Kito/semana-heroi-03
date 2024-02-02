'use client';
import Image from 'next/image';
import Send from '../../../public/send.png';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { SocketContext } from '@/contexts/SocketContext';

interface IChatMessageProps {
  message?: string;
  username: string;
  roomId: string;
  time: string;
}

export default function Chat({ roomId }: { roomId: string }) {
  const currentMessage = useRef<HTMLInputElement>(null);
  const { socket } = useContext(SocketContext);
  const [chat, setChat] = useState<IChatMessageProps[]>([]);

  useEffect(() => {
    socket?.on('chat', (data) => {
      console.log('message: ', data);
      setChat([...chat, data]);
    });
  }, [socket]);

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(currentMessage.current?.value);
    if (currentMessage.current?.value !== '') {
      const sendMsgToServer = {
        message: currentMessage.current?.value,
        username: 'Alexia Kattah',
        roomId,
        time: new Date().toLocaleTimeString(),
      };
      socket?.emit('chat', sendMsgToServer);
      setChat([...chat, sendMsgToServer]);
      // currentMessage.current?.value = '';
    }
  }

  return (
    <div className="bg-gray-900 px-4 py-4 md:w-[15%] hidden md:flex rounded-md m-3">
      <div className="h-full w-full flex flex-col justify-between">
        <div>
          {chat.map((chat, index) => {
            return (
              <div className="bg-gray-950 rounded p-2" key={index}>
                <div className="flex items-center text-pink-400 space-x-2">
                  <span>{chat.username}</span>
                  <span>{chat.time}</span>
                </div>
                <div className="mt-5 text-sm">
                  <p>{chat.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form className="w-full" onSubmit={(e) => sendMessage(e)}>
          <div className="flex relative ">
            <input
              type="text"
              name=""
              id=""
              ref={currentMessage}
              className="px-3 py-2 bg-gray-950 rounded-md w-full"
            />
            <button type="submit" className="absolute right-2 top-2.5 cursor-pointer">
              <Image
                className=""
                src={Send}
                width={20}
                height={20}
                alt="Send"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
