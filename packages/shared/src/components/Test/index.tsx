"use client";

const Test = ({ user }: { user: string }) => {
  return <button onClick={() => console.log(user)}>Test Button</button>;
};

export default Test;
