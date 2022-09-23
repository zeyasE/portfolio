import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Tabs } from 'antd';
import Resume from './components/Resume';
import Cover from './components/Cover';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';

const App = (): JSX.Element => {
  const cover = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const resume = useRef(null);

  const [scrollDirection, setScrollDirection] = useState<any>(null);

  const itemsTap = [
    {
      label: 'Me',
      key: "1"
    },
    {
      label: 'About',
      key: "2"
    },
    {
      label: 'Project & Work',
      key: "3"
    },
    {
      label: 'Resume',
      key: "4"
    }
  ]

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 0 || scrollY - lastScrollY < 0)) {
        setScrollDirection(direction);
        console.log(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);


  const scroll = (ref: any) => {
    console.log(ref.current.scrollIntoView)
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Tabs items={itemsTap} className="TabsAntd" style={{ top: scrollDirection === "down" ? "-3rem" : "0" }} centered tabPosition="top" onTabClick={(key) =>
        key === "1" ? scroll(cover) : key === "2" ? scroll(about) : key === "3" ? scroll(project) : scroll(resume)
      } />
      <div ref={cover}><Cover /></div>
      <div ref={about}><About /></div>
      <div ref={project}><Work /></div>
      <div ref={resume}><Resume /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
