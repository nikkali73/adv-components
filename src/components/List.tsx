//Si crea un oggetto custom di tipo List che accetta due parametri in ingresso: {items} e {renderItem}
//Il primo {items} è un array di oggetti generici, mentre renderItem è una function che accetta in ingresso
//un oggetto generico e ritorna un oggetto di tipo ReactNode.
//L'output è un oggetto <ul> che wrappa una lista 
//che può contenere qualsiasi tipo di dato: stringhe, oggetti, numeri...

import {type ReactNode} from "react";

type ListProps<T> = {
    items: T[];
    renderItem: (item: T)=> ReactNode;
};

export function List<T>({items, renderItem}: ListProps<T>){
    return <ul>{items.map(renderItem)}</ul>;
}

// Example usage:

export function DemoList(){
    const users = [
        {id:1, userName:"pippo"},
        {id:2, userName:"ciccio"}
    ];

    const hobbies = ['soccer', 'tennis', 'sci'];

    return(
        <main>
            <section>
                <h2>Users</h2>
                <List items={users}
                        renderItem={(user)=><li key={user.id}>{user.userName}</li>} />
            </section>
            <section>
                <h2>Hobbies</h2>
                <List items={hobbies}
                        renderItem={(hobbie)=><li key={hobbie}>{hobbie}</li>} />
            </section>
        </main>
    );
}