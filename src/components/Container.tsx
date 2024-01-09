import { ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType> = {
    as?: T;     //should be some valid identifier of a component, so of anything that can be output as JSX.
                        //NOT THE JSX CODE ITSELF, that would be a ReactNode, but the component that is used in JSX, 
                        //for example Button without angle brackets.
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;



//It's a wrapper component, and it's polimorphic too, that doesn't change; it receives the component 
//that should be returned as props
export default function Container<C extends ElementType>({as, children}: ContainerProps<C>) {
    const Component = as || 'div';   //With Upper Case capital C because React will Upper case component
    return <Component>{children}</Component>;
}