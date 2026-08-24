
import ClientComponent from './../components/clientComponent';
const page = () => {
    console.log('Hi, this is server page');
    return (
        <>
            <div>Server page</div>
            <ClientComponent />
        </>

    )
}

export default page