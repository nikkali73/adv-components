import { type ReactNode } from "react";

type MyCardProps = {
    title: string;
    actions: ReactNode;
    children: ReactNode;
}

export function MyCard({title, actions, children}: MyCardProps){
    return(<section title={title}>
        {actions}
        {children}
    </section>
    );
}

export default function DemoCard(){
    return(<MyCard 
        title="My Card"
        actions={<button onClick={()=>console.log("Click Me!!")}>Click Me!</button>}>
            <p>Esempio di MyCard</p>
        </MyCard>);
}