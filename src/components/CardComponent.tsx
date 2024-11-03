// Update Props Interface
interface CardComponentProps {
    title: string;
    numbers: number;
    icon: React.ReactNode;
    color?: string; // Optional color prop
  }
  
const CardComponent: React.FC<CardComponentProps> = ({ title, numbers, icon, color }) => {
    return (
      <div className="card" style={{ '--icon-color': color } as React.CSSProperties}>
        <div className="card-body">
          <div className="icon">{icon}</div>
          <p className="title">{title}</p>
          <h6 className="numbers">{numbers}</h6>
        </div>
      </div>
    );
};
  
  
export default CardComponent;
  