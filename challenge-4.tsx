interface person {
name: string;
age: number;
}
interface group{
name: string;
member: Array<person>;
}
const ui = React.FC<group>(props)=>{
}

/CHALLENGE: how can I define a default value for age or name of 
group memebers?/
