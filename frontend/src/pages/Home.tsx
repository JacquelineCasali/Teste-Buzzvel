

import All from '../components/All/All'
import AllInOne from '../components/AllInOne/AllInOne'
import Card from '../components/Card/Card'
import Contact from '../components/Contact/Contact'



import Header from '../components/Header/Header'
import Join from '../components/Join/Join'
import Statistic from '../components/Statistic/Statistic'
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
<Statistic/>
<Card />
<All/>
<Join/>
<Contact/>
    </>
  )
}
