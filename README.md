# JC-Product-Card

Este es un paquete de pruebas de despliegue en NPM

```
import {ProductCard, ProductImage, ProductButtons} from 'jc-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{ count: 4, maxCount: 10 }}
>
    {({
        count,
        isMaxCountReached,
        maxCount,
        reset,
        increaseBy,
    }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```

### Jonathan Clavijo

### Ejemplo
