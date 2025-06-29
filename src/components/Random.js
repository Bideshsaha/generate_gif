import React, { useEffect} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
// const[gif,setGif] = useState('');
// const[loading,setLoading] = useState('false');

// async function fetchdata(){
//     setLoading(true);
//     const  url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     // console.log(imageSource);
//     setGif(imageSource);
//     setLoading(false);
// }

const{gif,loading,fetchdata} = useGif();

useEffect(() =>{
    fetchdata();
},[])

// function clickHandler() {
//     fetchdata();
// }

    return(
        <div className="w-1/2  bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt="gif"/>)
            }

            <button onClick={() => fetchdata()}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Genarate
            </button>
        </div>
    )
}

export default Random;