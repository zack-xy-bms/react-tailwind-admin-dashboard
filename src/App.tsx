import { Route, BrowserRouter as Router, Routes } from 'react-router'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import AppLayout from '@/layout/AppLayout'
import SignIn from '@/pages/AuthPages/SignIn'
import SignUp from '@/pages/AuthPages/SignUp'
import Blank from '@/pages/Blank'
import ServerError from "@/pages/OtherPage/ServerError";
import Calendar from '@/pages/Calendar'
import BarChart from '@/pages/Charts/BarChart'
import LineChart from '@/pages/Charts/LineChart'
import Home from '@/pages/Dashboard/Home'
import FormElements from '@/pages/Forms/FormElements'
import NotFound from '@/pages/OtherPage/NotFound'
import BasicTables from '@/pages/Tables/BasicTables'
import ReactHookForm from '@/pages/UiElements/ReactHookForm'
import UserProfiles from '@/pages/UserProfiles'

export default function App(): React.ReactElement {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/react-hook-form" element={<ReactHookForm />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/error-500" element={<ServerError />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
