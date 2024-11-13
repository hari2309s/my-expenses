import React from 'react';

interface CardProps {
  title: string;
  icon: string;
}

const Card = ({ title, icon }: CardProps) => {
  return (
    <div className="container m-8 flex h-28 w-40 flex-col items-center justify-center rounded-md bg-dimgray text-floralwhite shadow-lg hover:cursor-pointer hover:bg-darkslategrey">
      <img src={icon} width={30} height={30} alt={title} />
      {title}
    </div>
  );
};

export default Card;
