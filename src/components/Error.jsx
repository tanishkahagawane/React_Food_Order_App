export default function Error({title,message}){
    console.log("here");
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}