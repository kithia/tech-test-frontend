import { render } from '@testing-library/react';
import CardList from '../pages/CardList';

test('renders the component', () => {
    render(<CardList />);
});

test('sets the document/page title', () => {
    expect(document.title).toBe("Card Listings | Moonpig");
});