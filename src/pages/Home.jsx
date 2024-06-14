import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';
import MainTitle from '../components/MainTitle';
import Button from '../components/Button';
import Spin from '../components/Spin';
import { TECollapse, TERipple, TEInput } from "tw-elements-react";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import PasswordInput from '../components/PasswordInput';
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);

    const user = {
      email: username,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', user);
      let token = response.data;

      /* toast.success('Successful Login!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
      console.log('Successful Login!: ', response.data) */

      const responseCurrentClient = await axios.get("http://localhost:8080/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success('Successful Login!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })

      let client = responseCurrentClient.data;
      client.token = token;

      dispatch(login(client));
      navigate('/accounts');
    } catch (error) {
      console.error('Error loggin in: ', error.response.data)
      toast.error('Login failed. Please try again.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      })
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <MainLayout>
      <div className='flex flex-col'>
        <section className="flex justify-center items-center min-h-[60vh] mt-16 mb-10">
          <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between bg-[#85A084] p-8 rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <div className="mb-12 md:mb-0 md:w-9/12 lg:w-5/12 xl:w-5/12">
                <form>
                  <div className=' bg-[#f5efe6] p-2 h-fit rounded-lg pt-2 mb-4'>
                    <TEInput
                      type="email"
                      label="Email address"
                      size="lg"
                      className=""
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <PasswordInput onChange={handlePasswordChange} />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                      <input
                        className="relative bfloat-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-white checked:focus:after:bg-transparent                         dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="checkbox"
                        value=""
                        id="exampleCheck2"
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#1A4D2E] font-bold"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a className='text-[#1A4D2E] font-bold' href="#!">Forgot password?</a>
                  </div>
                  <div className="text-center lg:text-left">
                    <TERipple rippleColor="light">
                      <Button to="#" text="Login" css='text-sm' onClick={handleLogin} />
                    </TERipple>
                    <hr className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] border-dotted" />
                    <div className="mb-0 mt-2 pt-1 text-[#1A4D2E] font-bold">
                      Don't have an account?{" "}
                      <Button to="/Register" text="Register" css='text-sm' />
                    </div>
                  </div>
                </form>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
