import React,{Suspense} from "react";
const name='Asset1'
const Temp = () => {
    const importComponent = (name) => React.lazy(()=>import(`../pages/${name}`));
    const Mc = importComponent(name);
    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Mc />
        </Suspense>
    );
}
export default Temp;