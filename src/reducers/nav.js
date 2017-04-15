import Navigator from '../components/navigator';

export default function(state, action) {
    const newState = Navigator.router.getStateForAction(action, state);
    return (newState ? newState : state);
}