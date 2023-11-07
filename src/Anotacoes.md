# Props
## Passando Props opcionais
```tsx
type Props = {
    type: string,
    buttonText: string,
    brand?: string
};

export default function Element({type, buttonText, brand=""} : Props) {};
```

## Passando Ícones
```tsx
<Element icon="<IconComponent></IconComponent>">
    
import ReactElement from 'react';
    
export default function Element(icon:ReactElement) {
    return (
        <>
            { icon }
        </>
    )
}
```