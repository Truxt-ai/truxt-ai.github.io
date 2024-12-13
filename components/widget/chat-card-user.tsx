function ChatCardUser({ content }: { content: string }) {
    return (
      <section className="flex justify-end">
        <div className="content max-w-full lg:max-w-[91.66%] bg-[#f2f2f2] p-3 rounded-[15px] text-xs">{content}</div>
      </section>
    );
  }
  export default ChatCardUser;