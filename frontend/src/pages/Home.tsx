

import AllInOne from '../components/AllInOne/AllInOne'

import Header from '../components/Header/Header'
import TeachMeet from '../components/TeachMeet/TeachMeet'
import TeachWorldwide from '../components/TeachWorldwide/TeachWorldwide'
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider'






export default function Home() {
  return (
    <>
     <Header/>

     <TeachWorldwide/>
     <AllInOne/>
   <TestimonialSlider/>
   <TeachMeet/>

    </>
  )
}
