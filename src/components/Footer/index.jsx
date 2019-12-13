import React from 'react';
import PropTypes from 'prop-types';
import { Facebook, Linkedin, Rss, Twitter } from 'react-feather';
import Button from '../Button';
import Link from '../Link';
import SsbLogo from '../../media/ssb-logo-white.svg';

const Footer = ({ children }) => (
	<div className="ssb-footer-wrapper">
		<div className="top-row flex-row justify-space-between flex-wrap">
			<SsbLogo alt="ssb logo" />
			<Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
				Til Toppen
			</Button>
		</div>
		<div className="footer-content">
			{children}
		</div>
		<div className="bottom-row flex-row justify-space-between flex-wrap">
			<div className="global-links">
				<Link href="https://www.ssb.no/" isExternal negative>Statistisk sentralbyrå © 2019</Link>
				<Link href="https://www.ssb.no/a-aa" isExternal negative>A-Å</Link>
				<Link href="https://www.ssb.no/nettstedskart" isExternal negative>Nettstedskart</Link>
			</div>
			<div className="social-links">
				<Link href=" " isExternal negative><Facebook /></Link>
				<Link href=" " isExternal negative><Twitter /></Link>
				<Link href=" " isExternal negative><Linkedin /></Link>
				<Link href=" " isExternal negative><Rss /></Link>
			</div>
		</div>
	</div>
);

Footer.defaultProps = {};

Footer.propTypes = {
	children: PropTypes.node,
};

export default Footer;
