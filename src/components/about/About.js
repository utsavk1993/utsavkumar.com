import React from 'react';
import Style from './About.module.scss';
import Terminal from './Terminal';
import { Box } from '@mui/material';
import { info } from '../../info/Info';

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat about{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function experienceText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd experience
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            experience <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.experience.map((exp, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {exp.duration} |{' '}
              </Box>
              {exp.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function githubContributions() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd contributions
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contributions <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <Box display={'flex'} flexDirection={'column'}>
          <Box
            component={'img'}
            src={'/img/githubContributions2023.png'}
            alt={'githubContributions2023'}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          backgroundColor={'#0d1117'}
          justifyItems={'center'}
          alignItems={'center'}
        >
          {/* <Box component={'img'} src={githubActivity2023} alt={'githubActivity2023'} width={'40%'} /> */}
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          {/* <Box component={'img'} src={githubContributions2024} alt={'githubContributions2024'} /> */}
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          backgroundColor={'#0d1117'}
          justifyItems={'center'}
          alignItems={'center'}
        >
          {/* <Box component={'img'} src={githubActivity2024} alt={'githubActivity2024'} width={'40%'} /> */}
        </Box>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{' '}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={'span'} mr={'1rem'}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'3rem'}
      id={'about'}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={experienceText()} />
      <Terminal text={githubContributions()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
