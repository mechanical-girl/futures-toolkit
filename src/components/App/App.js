import * as React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../BoxRow/BoxRow.css';
import { Pathway } from '../Pathway/Pathway';
import { HorizonScanning } from '../HorizonScanning/HorizonScanning.js';
import { DriverMapping } from '../DriverMapping/DriverMapping.js';
import { Visioning } from '../Visioning/Visioning.js';
import { ScanModal } from '../Modal/ScanModal.js';

import LogoHorizonScan from '../../assets/images/horizon-scan-logo.png';
import LogoScenarios from '../../assets/images/scenarios-logo.png';
import LogoSwotAnalysis from '../../assets/images/swot-analysis-logo.png';
import LogoVisioning from '../../assets/images/visioning-logo.png';


function App() {
  const [mainView, setMainView] = React.useState('landing');
  const [scans, setScans] = React.useState([
    {
      title: "Scan One",
      id: "0",
      blurb: "This is a scan",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat consequat mauris. Gravida rutrum quisque non tellus orci ac. Aliquet nec ullamcorper sit amet risus nullam eget. Suscipit tellus mauris a diam maecenas sed enim ut. Proin libero nunc consequat interdum. Duis at tellus at urna condimentum mattis. Porttitor eget dolor morbi non arcu risus quis.Sed risus ultricies tristique nulla.</p><p>Arcu non sodales neque sodales ut etiam sit amet nisl.Vulputate odio ut enim blandit.Etiam erat velit scelerisque in dictum non consectetur a erat.Eu facilisis sed odio morbi quis commodo odio aenean sed. Accumsan lacus vel facilisis volutpat.</p><p>Rhoncus dolor purus non enim.Purus ut faucibus pulvinar elementum integer.Sed nisi lacus sed viverra tellus.Pellentesque elit eget gravida cum sociis natoque penatibus et.Lectus quam id leo in vitae turpis massa.Feugiat vivamus at augue eget arcu.Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Dignissim suspendisse in est ante in nibh mauris cursus mattis.Est sit amet facilisis magna.Quis vel eros donec ac.Mauris pellentesque pulvinar pellentesque habitant morbi.Maecenas ultricies mi eget mauris pharetra et ultrices neque.Mi ipsum faucibus vitae aliquet nec.Orci phasellus egestas tellus rutrum tellus pellentesque.</p>Turpis massa tincidunt dui ut ornare lectus sit amet est.In tellus integer feugiat scelerisque varius morbi.Ullamcorper velit sed ullamcorper morbi tincidunt.Consectetur lorem donec massa sapien faucibus et molestie.Sapien faucibus et molestie ac feugiat sed lectus.Aliquam ultrices sagittis orci a scelerisque.Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.Facilisis leo vel fringilla est ullamcorper eget.Elementum facilisis leo vel fringilla est ullamcorper eget.Habitant morbi tristique senectus et netus et.</p>"
    },
    {
      title: "Scan Two",
      id: "1",
      blurb: "Another scan",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet facilisis. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat consequat mauris. Gravida rutrum quisque non tellus orci ac. Aliquet nec ullamcorper sit amet risus nullam eget. Suscipit tellus mauris a diam maecenas sed enim ut. Proin libero nunc consequat interdum. Duis at tellus at urna condimentum mattis. Porttitor eget dolor morbi non arcu risus quis.Sed risus ultricies tristique nulla.Arcu non sodales neque sodales ut etiam sit amet nisl.Vulputate odio ut enim blandit.Etiam erat velit scelerisque in dictum non consectetur a erat.Eu facilisis sed odio morbi quis commodo odio aenean sed.Accumsan lacus vel facilisis volutpat.</p><p>Rhoncus dolor purus non enim.Purus ut faucibus pulvinar elementum integer.Sed nisi lacus sed viverra tellus.Pellentesque elit eget gravida cum sociis natoque penatibus et.Lectus quam id leo in vitae turpis massa.Feugiat vivamus at augue eget arcu.Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Dignissim suspendisse in est ante in nibh mauris cursus mattis.Est sit amet facilisis magna.Quis vel eros donec ac.Mauris pellentesque pulvinar pellentesque habitant morbi.Maecenas ultricies mi eget mauris pharetra et ultrices neque.Mi ipsum faucibus vitae aliquet nec.Orci phasellus egestas tellus rutrum tellus pellentesque.</p>Turpis massa tincidunt dui ut ornare lectus sit amet est.In tellus integer feugiat scelerisque varius morbi.Ullamcorper velit sed ullamcorper morbi tincidunt.Consectetur lorem donec massa sapien faucibus et molestie.Sapien faucibus et molestie ac feugiat sed lectus.Aliquam ultrices sagittis orci a scelerisque.Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.Facilisis leo vel fringilla est ullamcorper eget.Elementum facilisis leo vel fringilla est ullamcorper eget.Habitant morbi tristique senectus et netus et.</p>"
    }]);
  const [show, setShow] = React.useState(false);
  const [thisScan, setThisScan] = React.useState({ "title": "", "body": "", "impact": 0, "urgency": 0, "opportunity": "ambiguous", questions: "" });

  const handleClose = () => setShow(false);
  const handleShow = (scan) => {
    setThisScan(scan);
    setShow(true);
  }

  const handleClick = (e) => {
    console.log("id: " + e.target.id);
    if (e.target.id === "horizon-scanning" || e.target.id === "add-new-scan") {
      setMainView("horizon-scanning");
    } else if (e.target.id === "driver-mapping") {
      setMainView("driver-mapping");
    } else if (e.target.id.startsWith('scan ')) {
      //show the individual scan
      let scanNumber = e.target.id.split(' ')[1];
      //arrays start at 0 if you're not PERL >:(
      let thisScan = scans[parseInt(scanNumber)];
      console.log(thisScan);
      handleShow(thisScan);
    } else if (e.target.id == "pathway-start") {
      setMainView("horizon-scanning");
    } else if (e.target.id == "visioning") {
      setMainView("visioning");
    }
    else {
      setMainView('landing');
    }
  }

  const DemoPathway = {
    "title": "Pathway Two",
    "business_need": "Creating a shared ambition for the future",
    "aim": "To build a shared aspiration of future success.<br />To create a shared sense of purpose and understanding of the futures task",
    "primary_activities": "Desk research leading to a workshop to determine the vision",
    "tools": ["Horizon Scanning", "Driver Mapping", "Visioning"],
    "participants": "Members of the policy team who are new to futures (experienced team members can participate as well)",
    "number": "Between six and sixteen",
    "timing": "5 hour workshop. 4-6 week lead time if participants also carry out scanning.",
    "approach": "<p> The heart of this pathway is a one day workshop where participants use Driver Mapping and Visioning. If there is time, participants should carry out Horizon Scanning before the workshop.If there is no time - and if one is available - participants can read a Horizon Scanning paper instead.</p><p>The main steps are</p><ol><li>If there is time, invite participants to carry out Horizon Scanning around the policy area. There is an option to use the tool as an individual learning exercise rather than a shared information gathering exercise if time is limited (i.e., participants do not need to share abstracts). If there is no time for Horizon Scanning, give participants an existing Horizon Scanning paper to review prior to the workshop.</li> <li>Run a workshop where participants: <ul> <li>brainstorm drivers shaping the policy area in the future</li> <li>map the drivers to identify predetermined elements and critical uncertainties</li> <li>use the mapping exercise to identify key factors for the vision</li> <li>determine the vision</li> <li>determine what need to be done to achieve the vision</li> </ul> </li> <li>Produce a report that sets out the conclusions of the workshop and records the consolidated vision. Send it to all participants</li></ol>",
    "output": "A workship report which sets out an agreed ambition of the future",
  }

  if (mainView == "landing") {
    return (
      <div className="container m">
        <div className="row">
          <div className="col text-center h1">
            <span>The Futures Toolkit</span>
          </div>
        </div>
        <Pathway
          pathway={DemoPathway}
          handleClick={handleClick}
        />
      </div>
    );
  } else if (mainView == "horizon-scanning") {
    return (
      <HorizonScanning
        scans={scans}
        handleClick={handleClick}
        setScans={setScans}
        modalShow={show}
        modalHandleClose={handleClose}
        modalThisScan={thisScan} />
    );
  } else if (mainView == "driver-mapping") {
    return (
      <DriverMapping
        scans={scans}
        handleClick={handleClick}
        modalShow={show}
        modalHandleClose={handleClose}
        modalThisScan={thisScan} />
    );
  } else if (mainView == "visioning") {
    return (
      <Visioning
        scans={scans}
        handleClick={handleClick}
        modalShow={show}
        modalHandleClose={handleClose}
        modalThisScan={thisScan} />
    );
  }
}

export default App;
