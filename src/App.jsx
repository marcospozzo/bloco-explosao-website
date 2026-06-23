import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/de/Home.jsx'
import News from './pages/de/News.jsx'
import Media from './pages/de/Media.jsx'
import LessonsWorkshops from './pages/de/LessonsWorkshops.jsx'
import References from './pages/de/References.jsx'
import Impressum from './pages/de/Impressum.jsx'
import BigFormation from './pages/de/bands/BigFormation.jsx'
import SmallFormations from './pages/de/bands/SmallFormations.jsx'
import FormationWithBand from './pages/de/bands/FormationWithBand.jsx'
import SpecialArrangements from './pages/de/bands/SpecialArrangements.jsx'
import DuoTrio from './pages/de/bands/DuoTrio.jsx'
import GroupLeaders from './pages/de/bands/GroupLeaders.jsx'
import TripToBrazil from './pages/de/bands/TripToBrazil.jsx'

import EnHome from './pages/en/Home.jsx'
import EnNews from './pages/en/News.jsx'
import EnMedia from './pages/en/Media.jsx'
import EnLessonsWorkshops from './pages/en/LessonsWorkshops.jsx'
import EnAppearances from './pages/en/Appearances.jsx'
import EnBigPercussion from './pages/en/bands/BigPercussion.jsx'
import EnSmallPercussion from './pages/en/bands/SmallPercussion.jsx'
import EnPercussionWithBands from './pages/en/bands/PercussionWithBands.jsx'
import EnSpecialPerformances from './pages/en/bands/SpecialPerformances.jsx'
import EnDuoTrio from './pages/en/bands/DuoTrio.jsx'
import EnGroupLeaders from './pages/en/bands/GroupLeaders.jsx'
import EnTripToBrazil from './pages/en/bands/TripToBrazil.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nachrichten" element={<News />} />
      <Route path="/medien" element={<Media />} />
      <Route path="/unterricht-workshops" element={<LessonsWorkshops />} />
      <Route path="/referenzen" element={<References />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/bands-projekte/grosse-formation" element={<BigFormation />} />
      <Route path="/bands-projekte/kleine-formationen" element={<SmallFormations />} />
      <Route path="/bands-projekte/formation-mit-band-und-saenger" element={<FormationWithBand />} />
      <Route path="/bands-projekte/spezielle-arrangements" element={<SpecialArrangements />} />
      <Route path="/bands-projekte/duo-trio" element={<DuoTrio />} />
      <Route path="/bands-projekte/gruppenleiter" element={<GroupLeaders />} />
      <Route path="/bands-projekte/brasilien" element={<TripToBrazil />} />

      <Route path="/en" element={<EnHome />} />
      <Route path="/en/news" element={<EnNews />} />
      <Route path="/en/media" element={<EnMedia />} />
      <Route path="/en/lessons-workshops" element={<EnLessonsWorkshops />} />
      <Route path="/en/appearances" element={<EnAppearances />} />
      <Route path="/en/bands/big-percussion" element={<EnBigPercussion />} />
      <Route path="/en/bands/small-percussion" element={<EnSmallPercussion />} />
      <Route path="/en/bands/percussion-with-bands" element={<EnPercussionWithBands />} />
      <Route path="/en/bands/special-performances" element={<EnSpecialPerformances />} />
      <Route path="/en/bands/duo-trio" element={<EnDuoTrio />} />
      <Route path="/en/bands/group-leaders" element={<EnGroupLeaders />} />
      <Route path="/en/bands/trip-to-brazil" element={<EnTripToBrazil />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
