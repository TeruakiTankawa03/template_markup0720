const HASH = location.hash;
const PATH = location.pathname;
const A    = 'is-active';

import requestAnimationFrame from './functions/requestAnimationFrame';
import query from './functions/query';
import addClass from './functions/addClass';
import current from './functions/current';
import download from './functions/download';
import iossubmit from './functions/iossubmit';
import limit from './functions/limit';
import loader from './functions/loader';
import onoff from './functions/onoff';
import scroll from './functions/scroll';
import smooth from './functions/smooth';
import sticky from './functions/sticky';
import toggle from './functions/toggle';
import totop from './functions/totop';
import webcomponent from './functions/webcomponent';

window.onload = () => {
	requestAnimationFrame();
	addClass(A);
	current(A);
	download();
	iossubmit();
	limit();
	loader(A);
	onoff(A, query());
	scroll(A);
	smooth();
	sticky(A);
	toggle();
	totop();
	webcomponent();
}