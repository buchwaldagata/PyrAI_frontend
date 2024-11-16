import React from 'react';

interface WrapperCardProps {
  title?: string; 
  children: React.ReactNode; 
  style?: React.CSSProperties; 
  bordered?: boolean;
}

const Card: React.FC<WrapperCardProps> = ({
  title,
  children,
  style,
  bordered = true,
}) => {
  return (
    <Card
      title={title}
      bordered={bordered}
      style={{
        maxWidth: 800,
        margin: '20px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
    >
      {children}
    </Card>
  );
};

export default Card;