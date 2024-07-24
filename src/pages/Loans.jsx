import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import MainTitle from '../components/MainTitle';
import AvailableLoansInfo from '../components/AvailableLoansInfo';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Button';
import Spin from '../components/Spin';
import { useSelector } from 'react-redux';
import LoansInfo from '../components/LoansInfo';

import { Carousel } from 'antd';


const Loans = () => {
  const [availableLoans, setAvailableLoans] = useState([]);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.authReducer.user);
  const token = useSelector((state) => state.authReducer.token);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log("Loans Component Mounted");

    const fetchAvailableLoans = async () => {
      try {
        setLoading(true);

        const response = await axios.get('https://java-module.onrender.com/api/loans/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setAvailableLoans(response.data);
      } catch (err) {
        console.error('Error fetching available loans: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchAvailableLoans();
    }

    return () => {
      console.log("Loans unmounted");
    };
  }, [token]);

  useEffect(() => {
    const fetchClientLoans = async () => {

      try {
        setLoading(true);
        const clientResponse = await axios.get('https://java-module.onrender.com/api/auth/current', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(clientResponse.data);
        if (clientResponse.data && clientResponse.data.loans) {
          setLoans(clientResponse.data.loans);
        } else {
          console.log("Client's loans not found");
        }
      } catch (err) {
        console.error('Error fetching client loans: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchClientLoans();
    }
  }, [token]);

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      {/* <MainLayout> */}
      <div className='my-8 '>
        <MainTitle text='Your Loans' />
        <div className='flex flex-wrap justify-center mt-8'>
          {loans.map((loan, id) => (
            <LoansInfo key={id} loanType={loan.name} amount={loan.amount} payments={loan.payments} />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center xl:p-16 my-10 relative' >
        <MainTitle text='Available Loans to Apply' css='bg-[#3f361e] xl:w-4/12 text-white px-4 py-2 rounded-lg xl:mt-0 mb-8 absolute -top-16 xl:top-10 ' />
        <div className='w-11/12 md:w-3/4 xl:w-1/2 p-2 h-1/2 bg-[#6BBDA4] rounded-lg radial-gradient-bg '>
          <Carousel {...settings}>
            {availableLoans.map((loan, id) => (
              <div className='flex justify-center items-center w-11/12'>
                <AvailableLoansInfo
                  key={id}
                  loanType={loan.loanName}
                  amount={loan.maxAmount}
                  payments={loan.payments.map((payment, index, array) => {
                    if (index === array.length - 1) {
                      return payment.toString();
                    } else {
                      return payment.toString() + ' - ';
                    }
                  })}
                />
              </div>
            ))}
          </Carousel>


        </div>
      </div>
      <Button text='Request new Loan' to='/ApplyLoans' css={'mb-8'} />
      {/* </MainLayout> */}
    </>
  );
};

export default Loans;
