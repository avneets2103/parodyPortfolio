import React, { useState, useEffect } from 'react';
import '../index.css';
import './colorPallete.css';

const colors: string[] = ['#FF4301', '#179BAE', '#F9E400', '#88D66C', '#FFB22C'];
interface Props {
  colorIndex: number;
  setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ColorPalette:any = (props: Props) => {
    const { colorIndex, setColorIndex } = props;
    const [primaryColor, setPrimaryColor] = useState<string>(colors[colorIndex]);
    const [colorChooseMenu, setColorChooseMenu] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.style.setProperty('--orange', primaryColor);
    }, [primaryColor]);

    const handleColorChange = (color: string) => {
        document.documentElement.style.setProperty('--orange', color);
        setPrimaryColor(color);
        setColorIndex(colors.indexOf(color));
        setColorChooseMenu(false); // Close the color palette after changing the color
    };

    return (
        <div className={colorChooseMenu ? 'fullh colorpallete' : 'colorpallete'}>
            <button className='mainColorButton' onClick={() => setColorChooseMenu(!colorChooseMenu)}>
                <img src="../icons/color-wheel.png" alt="colorpallete" />
            </button>
            <div className={colorChooseMenu ? 'colors showColors' : 'colors'}>
                {colors.map((color, index) => 
                    <button 
                        key={index} 
                        onClick={() => handleColorChange(color)} 
                        style={{ backgroundColor: color }} 
                        className={`colorPalleteButton ${color === primaryColor ? 'selectedColor' : ''}`}>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ColorPalette;
