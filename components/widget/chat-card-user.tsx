function ChatCardUser({ content }: { content: string }) {
    return (
      <section className="flex justify-end">
        <div className="content max-w-full lg:max-w-[91.66%] bg-primaryWhite p-3 rounded-[15px] text-xs dark:text-white dark:bg-darkBlue">{content}</div>
      </section>
    );
  }
  export default ChatCardUser;