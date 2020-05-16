import * as React from 'react';
import { NowPlaying } from '@organisms/NowPlaying';
import { Default } from '@templates/Default';

export const Home: React.FC = () => (
    <Default>
        <h1>Home</h1>
        <NowPlaying />
    </Default>
);
