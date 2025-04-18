import React from 'react';

type NavProps = React.ComponentProps<'nav'>;

export const Nav: React.FC<NavProps> = (props) => <nav {...props} />;
