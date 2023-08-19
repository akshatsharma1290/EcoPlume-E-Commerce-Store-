import SuccessGif from "../../assets/success.gif"

const PaymentSuccess = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center h-screen bg-[#2ecc71]">
       <img src={SuccessGif} alt="Payment Success Animation" />
       <h1 className="text-white font-outfit tracking-wide font-bold text-4xl mt-2">Payment Successful</h1>
    </section>
    </>
  )
}

export default PaymentSuccess