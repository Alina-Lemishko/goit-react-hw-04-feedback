import React from 'react';
import s from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={s.container}>
    <h1 className={s.title}>{title}</h1>
    {children}
  </section>
);
