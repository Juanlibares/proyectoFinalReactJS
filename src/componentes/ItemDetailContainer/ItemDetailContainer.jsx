import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db/db";
import ItemDetails from "./ItemDetails";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    

  return (
    <div>
        {item && <ItemDetails item={item} />}
    </div>
  )
}

export default ItemDetailContainer