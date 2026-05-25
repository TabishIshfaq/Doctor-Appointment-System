import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}

      {!loading && !error && appointments.length === 0 && (
        <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor'>
          You didn't book any doctor yet!!
        </h2>
      )}

      {!loading && !error && appointments.length > 0 && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {appointments.map(doctor => (
            <div key={doctor._id} className='p-4 rounded-md border border-solid border-[#0066ff34] flex items-center gap-4'>
              <img src={doctor.photo} alt={doctor.name} className='w-[60px] h-[60px] rounded-full object-cover' />
              <div>
                <h3 className='text-[16px] font-bold text-headingColor'>{doctor.name}</h3>
                <p className='text-textColor text-[14px]'>{doctor.specialization}</p>
                <span className='text-[13px] bg-green-100 text-green-600 font-semibold px-2 py-1 rounded-full mt-1 inline-block'>
                  ✅ Aap ki appointment confirmed hai
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyBookings