import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import MainTitle from '../components/MainTitle'
import LoansInfo from '../components/LoansInfo'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import Spin from '../components/Spin'
import { useSelector  } from 'react-redux';

const Loans = () => {
  const [loans, setLoans] = useState([]);
  // const [client, setClient] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {

    console.log("Loans Component Mounted")

    const fetchAvailableLoans = async () => {

      try {

        setLoading(true)

        const response = await axios.get('http://localhost:8080/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        
        setLoans(response.data);

      } catch (err) {

        console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola

      } finally {

        setLoading(false)

      }
    };

    if (token) {

      fetchAvailableLoans();

    }

    return () => {
      console.log("Loans unmounted")
    }
  }, [token]);

  if (loading) {
    return (
      <Spin />
    );
  }

  return (
    <>
      <MainLayout>
        <div>          
          <MainTitle text='Loans Available' />

          <div className='flex flex-wrap justify-center my-28'>
            {
              loans.map((loan, id) => (
                <LoansInfo key={id} loanType={loan.loanName} amount={loan.maxAmount} payments={loan.payments.map((payment, index, array) => {
                  // Verificar si es el último elemento del arreglo
                  if (index === array.length - 1) {
                    // Si es el último elemento, devolver solo la representación de cadena del pago sin guión después
                    return payment.toString();
                  } else {
                    // Si no es el último elemento, devolver la representación de cadena del pago seguida de un guion
                    return payment.toString() + " - ";
                  }
                })} />
              ))
            }
          </div>

          <Button text='Request new Loan' to='/ApplyLoans' />
        </div>
      </MainLayout>
    </>
  )
}

export default Loans

/* En JavaScript, los índices de los arreglos comienzan desde 0. Por lo tanto, el índice del último elemento en un arreglo de longitud n es n - 1. Esto se debe a que los índices van desde 0 hasta n - 1, donde n es el número total de elementos en el arreglo.

Entonces, cuando comparamos index === array.length - 1, estamos verificando si el índice actual (index) es igual al índice del último elemento en el arreglo (array.length - 1). Si esta comparación es verdadera, significa que estamos en el último elemento del arreglo. */