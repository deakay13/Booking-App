import { useState, useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../../../../firebase-config";

export interface Users {
  ID: number;
  // Name: string;
  Email: string;
  // Roles: string;
  Password: string;
  Date: string;
}

export default function HandleListUsers() {
  const [data, setData] = useState<Users[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Users"));
        const usersData = querySnapshot.docs.map((doc, index) => ({
          ID: index + 1,
          // Name: doc.data().Name,
          Email: doc.data().Email,
          // Roles: doc.data().Roles,
          Password: doc.data().Password,
          Date: doc.data().Date,
        }));
        setData(usersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

    return {
      data,
      currentData,
      currentPage,
      totalPages,
      rowsPerPage,
      handleNext,
      handlePrev,
    };
};
