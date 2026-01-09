import { useState, useEffect } from 'react';
import api from '../services/api';
import { COMPONENTS } from '../constants/components';

const useComponents = (initialCategory = 'all') => {
    // optimize: Initialize directly for instant/static render
    const [components] = useState(COMPONENTS);
    const [loading] = useState(false);
    const [error] = useState(null);

    return { components, loading, error };
};

export default useComponents;
