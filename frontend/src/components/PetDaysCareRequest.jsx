import style from '../cssFiles/signup.module.css'
import { useState, useEffect, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import petCareRequestImage from '../Images/petCareRequestImage.jpg'
import { mycontext } from './Config'

export default function PetDaysCareRequest() {
    const { userId } = useContext(mycontext)
    const { usertokenData } = useContext(mycontext)
    const navigate = useNavigate()
    const [petName, setPetName] = useState("")
    const [petAge, setPetAge] = useState("")
    const [petBreed, setPetBreed] = useState("")
    const [gender, setGender] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [medication, setMedication] = useState("")
    const [grooming, setGrooming] = useState("")
    const [food, setFood] = useState("")
    const [description, setDescription] = useState("")
    const [mobile, setMobile] = useState("")
    const [status, setStatus] = useState(0)
    const [minDate,setMinDate]=useState("")
    // ---------------------------------------------
    const [petNameError, setPetNameError] = useState("")
    const [petAgeError, setPetAgeError] = useState("")
    const [petBreedError, setPetBreedError] = useState("")
    const [petGenderError, setPetGenderError] = useState("")
    const [startDateError, setStartDateError] = useState("")
    const [endDateError, setEndDateError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [mobileError, setMobileError] = useState("")


    async function handleSubmit(e) {
        e.preventDefault()
       
        !petName ? setPetNameError("PetNameMandatory") : setPetNameError("")
        if (!petAge) {
            setPetAgeError("PetAgeMandatory")
        }
        else if (!/^\d+$/.test(petAge) || Number(petAge) <=0) {
            setPetAgeError("Age must be greater than 0")
            return}
             else {
            setPetAgeError("")
        }
        !petBreed ? setPetBreedError("PetBreedMandatory") : setPetBreedError("")
        !gender ? setPetGenderError("PetGenderMandatory") : setPetGenderError("")
        !startDate ? setStartDateError("Start Date is Mandatory ") : setStartDateError("")
        if(new Date(startDate)<new Date(minDate)){
            alert("Start Date Can't be In the past")
            return ;
        }
        !endDate ? setEndDateError("End Date is Mandatory ") : setEndDateError("")
        !description ? setDescriptionError("This Field is Mandatory") : setDescriptionError("")
        if (!mobile) {
            setMobileError("MobileNumber is Mandatory")
            return
        } else if (!/^[6-9][0-9]{9}$/.test(mobile)) {
            setMobileError("Enter Valid Number")
            return
        }
        else {
            setMobileError("")
        }
        if (!petName || !petAge || !petBreed || !gender || !startDate || !endDate || !description) {
            return
        }



        e.preventDefault()
        let response = await fetch("https://pet-train-care.onrender.com/petdayscare", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ petName, petAge, petBreed, gender, startDate, endDate, medication, food, grooming, description, mobile, status, userId })
        })
        console.log(response)

        if (response.status === 200) {
            navigate('/petcareplaceddata')
        }
        setPetName("")
        setPetAge("")
        setPetBreed("")
        setGender("")
        setStartDate("")
        setEndDate("")
        setMedication("")
        setGrooming("")
        setFood("")
        setDescription("")
        setMobile("")
    }
    function formattedDate(date){
    const year =date.getFullYear()
    const month = String(date.getMonth()+1).padStart(2,'0')
    const day = String(date.getDate()).padStart(2,'0')
    return `${year}-${month}-${day}`
    }

    useEffect(()=>{
        const today= new Date()
        let formatDate = formattedDate(today)
        console.log(formatDate)
        // setStartDate(formatDate)
        // setEndDate(formatDate)
        setMinDate(formatDate)
    },[])

    console.log(startDate)



    return (
        <>
            <div className={`${style.formContainer}`} style={{
                backgroundImage: ` url(${petCareRequestImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <div className={style.formBox}>
                    <div className={style.formMin} >
                        <form id={style.form} onSubmit={handleSubmit}>
                            <div>
                                <h1 className={`${style.formHeader} mb-5 `}>Pet Days Care Form</h1>
                                <div className={`{style.inputgroup} d-flex gap-1`} style={{ width: "100%" }} >
                                    <div style={{ width: "50%" }}>
                                        <input type="text" className={style.input} placeholder='petName' value={petName} onChange={(e) => setPetName(e.target.value)} />
                                        <small className={style.errorMessage}>{petNameError}</small>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <input type="text" className={style.input} placeholder='petAge' value={petAge} onChange={(e) => setPetAge(e.target.value)} />
                                        <small className={style.errorMessage}>{petAgeError}</small>
                                    </div>
                                </div>

                                <div className={`{style.inputgroup} d-flex gap-1 mt-4`}>
                                    <div style={{ width: "50%" }}>
                                        <input type="text" className={style.input} placeholder='petBreed' value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
                                        <small className={style.errorMessage}>{petBreedError}</small>
                                    </div>

                                    <div style={{ width: "50%" }}>
                                        <select type='text' className={style.gender} value={gender} onChange={(e) => setGender(e.target.value)} >
                                            <option value="">select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <small className={style.errorMessage}>{petGenderError}</small>
                                    </div>
                                </div>


                                <div className={`{style.inputgroup} d-flex gap-1  my-2`} >
                                    <div style={{ width: "50%" }}>
                                        <label className='text-light ' id="startDate">Start Date</label>
                                        <input type="date" className={style.input} value={startDate} min={minDate} onChange={(e) => setStartDate(e.target.value)} />
                                        <small className={style.errorMessage}>{startDateError}</small>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <label className='text-light'>End Date</label>
                                        <input type="date" className={style.input} value={endDate} onChange={(e) => setEndDate(e.target.value)} min={minDate} />
                                        <small className={style.errorMessage}>{endDateError}</small>
                                    </div>

                                </div>
                                <div className={style.inputgroup}>
                                    <div style={{ width: "117%" }}>
                                        <input type="text" placeholder='medication' value={medication} onChange={(e) => setMedication(e.target.value)} />
                                    </div>

                                </div>
                                <div className={`{style.inputgroup} d-flex gap-1`} >
                                    <div style={{ width: "50%" }}>
                                        <input type="text" className={style.input} placeholder='grooming' value={grooming} onChange={(e) => setGrooming(e.target.value)} />
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <input type="text" placeholder='food' className={style.input} value={food} onChange={(e) => setFood(e.target.value)} />
                                    </div>
                                </div>

                                <div className={style.inputgroup}>
                                    <div style={{ width: "117%" }}>
                                        <textarea type='text' maxLength={500} className={style.description} placeholder='Write something about your pet behaviour' value={description} onChange={(e) => setDescription(e.target.value)} />
                                        <small className={style.errorMessage}>{descriptionError}</small>
                                    </div>
                                </div>
                                <div className={style.inputgroup}>
                                    <div style={{ width: "117%" }}>
                                        <input type='text' placeholder='Enter Your Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                        <small className={style.errorMessage}>{mobileError}</small>
                                    </div>
                                </div>
                                <div className={style.buttongroup}>
                                    <button className={style.submitBtn}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}