export const INPUT_COMPONENTS = [
    {
        id: 'input-floating-label',
        name: 'Floating Label Input',
        category: 'animated-input',
        description: 'Label floats above when input is focused with a smooth transition.',
        tags: ['input', 'floating', 'animation'],
        preview: `
      <div class="w-full max-w-md mx-auto relative">
        <input type="text" id="floating-preview" 
               class="w-full bg-gray-900/70 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
               onfocus="this.nextElementSibling.classList.add('focused')"
               onblur="if(this.value === '') this.nextElementSibling.classList.remove('focused')">
        <label for="floating-preview" 
               class="floating-label absolute left-4 top-4 text-gray-400 bg-gray-900 p-1 pointer-events-none transition-all duration-300">
            Full Name
        </label>
      </div>
    `,
        code: {
            html: `
<div class="relative">
    <input type="text" id="floating-input" 
           class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
           onfocus="this.nextElementSibling.classList.add('focused')"
           onblur="if(this.value === '') this.nextElementSibling.classList.remove('focused')">
    <label for="floating-input" 
           class="floating-label absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300">
        Full Name
    </label>
</div>

<style>
.floating-label {
    transition: all 0.3s ease;
}
.floating-label.focused {
    transform: translateY(-24px) scale(0.85);
    color: #3B82F6;
}
</style>`,
            react: `import React, { useState } from 'react';

const FloatingLabelInput = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className="relative">
            <input 
                type="text" 
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(value !== '')}
                onChange={(e) => setValue(e.target.value)}
            />
            <label className={\`absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 \${focused || value ? "-translate-y-6 scale-85 text-blue-500" : ""}\`}>
                Full Name
            </label>
        </div>
    );
};

export default FloatingLabelInput;`
        }
    },
    {
        id: 'input-border-flow',
        name: 'Animated Border Input',
        category: 'animated-input',
        description: 'Rainbow border animation flows continuously around the input field.',
        tags: ['input', 'border', 'glow'],
        preview: `
      <div class="w-full max-w-md mx-auto relative p-1 rounded-xl input-border-animation">
          <input type="email" 
                 class="w-full bg-gray-900 rounded-xl px-4 py-4 text-white focus:outline-none transition-all duration-300"
                 placeholder="Enter your email">
      </div>
    `,
        code: {
            html: `
<div class="relative p-1 rounded-xl input-border-animation">
    <input type="email" 
           class="w-full bg-gray-900 rounded-xl px-4 py-4 text-white focus:outline-none transition-all duration-300"
           placeholder="Enter your email">
</div>

<style>
.input-border-animation {
    background: linear-gradient(90deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 100%;
    animation: borderFlow 3s linear infinite;
}
@keyframes borderFlow {
    0%, 100% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
}
</style>`,
            react: `import React from 'react';

const AnimatedBorderInput = () => {
    return (
        <div className="relative p-1 rounded-xl bg-linear-to-r from-red-500 via-yellow-500 to-blue-500 bg-size-[400%_100%] animate-border-flow">
            <input 
                type="email" 
                className="w-full bg-gray-900 rounded-xl px-4 py-4 text-white focus:outline-none transition-all duration-300"
                placeholder="Enter your email"
            />
        </div>
    );
};

export default AnimatedBorderInput;`
        }
    },
    {
        id: 'input-strength-meter',
        name: 'Password Strength Meter',
        category: 'animated-input',
        description: 'Real-time password strength analysis with animated progress bar.',
        tags: ['input', 'password', 'strength'],
        preview: `
      <div class="w-full max-w-md mx-auto space-y-4">
          <input type="password" 
                 class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-500 transition-all duration-300"
                 placeholder="Create a password"
                 oninput="
                    let strength = 0;
                    const val = this.value;
                    if(val.length >= 8) strength += 25;
                    if(/\\d/.test(val)) strength += 25;
                    if(/[A-Z]/.test(val)) strength += 25;
                    if(/[^A-Za-z0-9]/.test(val)) strength += 25;
                    const meter = this.nextElementSibling.firstElementChild;
                    meter.style.width = strength + '%';
                    meter.style.backgroundColor = strength < 50 ? '#ef4444' : strength < 100 ? '#f59e0b' : '#10b981';
                 ">
          <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full w-0 bg-red-500 transition-all duration-500"></div>
          </div>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const PasswordStrengthInput = () => {
    const [strength, setStrength] = useState(0);

    const checkStrength = (val) => {
        let s = 0;
        if(val.length >= 8) s += 25;
        if(/\\d/.test(val)) s += 25;
        if(/[A-Z]/.test(val)) s += 25;
        if(/[^A-Za-z0-9]/.test(val)) s += 25;
        setStrength(s);
    };

    const getColor = () => {
        if (strength < 50) return 'bg-red-500';
        if (strength < 100) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="w-full space-y-4">
            <input 
                type="password"
                onChange={(e) => checkStrength(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-500 transition-all duration-300"
                placeholder="Create a password"
            />
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className={\`h-full transition-all duration-500 \${getColor()}\`} 
                    style={{ width: \`\${strength}%\` }}
                />
            </div>
        </div>
    );
};

export default PasswordStrengthInput;`
        }
    },
    {
        id: 'input-otp',
        name: 'OTP Input with Auto-Focus',
        category: 'animated-input',
        description: 'Auto-focus moves to next digit. Each digit scales up on focus.',
        tags: ['input', 'otp', 'autofocus'],
        preview: `
      <div class="flex justify-center space-x-3">
          <input type="text" maxlength="1" class="otp-digit w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-yellow-500 focus:scale-110 transition-all duration-300" oninput="if(this.value) this.nextElementSibling?.focus()">
          <input type="text" maxlength="1" class="otp-digit w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-yellow-500 focus:scale-110 transition-all duration-300" oninput="if(this.value) this.nextElementSibling?.focus()">
          <input type="text" maxlength="1" class="otp-digit w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-yellow-500 focus:scale-110 transition-all duration-300" oninput="if(this.value) this.nextElementSibling?.focus()">
          <input type="text" maxlength="1" class="otp-digit w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-yellow-500 focus:scale-110 transition-all duration-300">
      </div>
    `,
        code: {
            react: `import React, { useRef } from 'react';

const OTPInput = () => {
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        if (e.target.value.length === 1 && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    return (
        <div className="flex justify-center space-x-3">
            {[0, 1, 2, 3].map((i) => (
                <input
                    key={i}
                    ref={(el) => (inputs.current[i] = el)}
                    type="text"
                    maxLength="1"
                    onChange={(e) => handleChange(e, i)}
                    className="w-12 h-12 bg-gray-900 border-2 border-gray-700 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-yellow-500 focus:scale-110 transition-all duration-300"
                />
            ))}
        </div>
    );
};

export default OTPInput;`
        }
    },
    {
        id: 'input-search-animated',
        name: 'Animated Search Input',
        category: 'animated-input',
        description: 'Search results slide up with fade-in animation as you type.',
        tags: ['input', 'search', 'results'],
        preview: `
      <div class="w-full max-w-md mx-auto space-y-4">
          <div class="relative">
              <input type="text" 
                     class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-all duration-300"
                     placeholder="Search..."
                     oninput="this.parentElement.nextElementSibling.classList.toggle('hidden', !this.value)">
              <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <i class="fas fa-search"></i>
              </div>
          </div>
          <div class="hidden space-y-2 animate-slide-up">
              <div class="bg-gray-800 p-2 rounded-lg text-sm text-gray-300">Result 1</div>
              <div class="bg-gray-800 p-2 rounded-lg text-sm text-gray-300">Result 2</div>
          </div>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const SearchInput = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <div className="relative">
                <input 
                    type="text" 
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-all duration-300"
                    placeholder="Search..."
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                </div>
            </div>
            {query && (
                <div className="space-y-2 animate-slide-up">
                    <div className="bg-gray-800 p-2 rounded-lg text-sm text-gray-300">Result 1</div>
                    <div className="bg-gray-800 p-2 rounded-lg text-sm text-gray-300">Result 2</div>
                </div>
            )}
        </div>
    );
};

export default SearchInput;`
        }
    },
    {
        id: 'input-card-format',
        name: 'Credit Card Input',
        category: 'animated-input',
        description: 'Auto-formatting for card number with detection animation.',
        tags: ['input', 'card', 'checkout'],
        preview: `
      <div class="w-full max-w-md mx-auto relative">
          <input type="text" 
                 class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300"
                 placeholder="1234 5678 9012 3456"
                 oninput="
                    let val = this.value.replace(/\\s/g, '').replace(/\\D/g, '');
                    let res = '';
                    for (let i = 0; i < val.length; i++) {
                        if (i > 0 && i % 4 === 0) res += ' ';
                        res += val[i];
                    }
                    this.value = res.substring(0, 19);
                 ">
          <div class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-indigo-400">VISA</div>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const CreditCardInput = () => {
    const [card, setCard] = useState('');

    const formatCard = (val) => {
        let v = val.replace(/\\s/g, '').replace(/\\D/g, '');
        let res = '';
        for (let i = 0; i < v.length; i++) {
            if (i > 0 && i % 4 === 0) res += ' ';
            res += v[i];
        }
        setCard(res.substring(0, 19));
    };

    return (
        <div className="relative">
            <input 
                type="text" 
                value={card}
                onChange={(e) => formatCard(e.target.value)}
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="1234 5678 9012 3456"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-indigo-400 animate-bounce-in">VISA</div>
        </div>
    );
};

export default CreditCardInput;`
        }
    },
    {
        id: 'input-char-counter',
        name: 'Character Counter Input',
        category: 'animated-input',
        description: 'Real-time character counting with color changing warnings.',
        tags: ['input', 'textarea', 'counter'],
        preview: `
      <div class="w-full max-w-md mx-auto space-y-2">
          <textarea class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-teal-500 transition-all duration-300 h-32" 
                    maxlength="100"
                    oninput="this.nextElementSibling.firstElementChild.textContent = this.value.length"></textarea>
          <div class="text-right text-xs text-gray-500">
              <span class="text-teal-400 font-bold">0</span> / 100 characters
          </div>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const CharCounterInput = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full space-y-2">
            <textarea 
                maxLength={100}
                onChange={(e) => setCount(e.target.value.length)}
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-teal-500 transition-all duration-300 h-32"
            />
            <div className="text-right text-xs text-gray-500">
                <span className={count > 80 ? 'text-red-400' : 'text-teal-400'}>{count}</span> / 100 characters
            </div>
        </div>
    );
};

export default CharCounterInput;`
        }
    },
    {
        id: 'input-password-toggle',
        name: 'Toggle Password Visibility',
        category: 'animated-input',
        description: 'Toggle password visibility with an animated state change.',
        tags: ['input', 'password', 'visibility'],
        preview: `
      <div class="w-full max-w-md mx-auto relative">
          <input type="password" 
                 class="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 pr-12 text-white focus:outline-none focus:border-orange-500 transition-all duration-300"
                 placeholder="Password">
          <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  onclick="const input = this.previousElementSibling; input.type = input.type === 'password' ? 'text' : 'password'">
              <i class="fas fa-eye"></i>
          </button>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const PasswordToggleInput = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <input 
                type={show ? 'text' : 'password'}
                className="w-full bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 pr-12 text-white focus:outline-none focus:border-orange-500 transition-all duration-300"
                placeholder="Password"
            />
            <button 
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
                {show ? '🙈' : '👁️'}
            </button>
        </div>
    );
};

export default PasswordToggleInput;`
        }
    },
    {
        id: 'input-tag-chips',
        name: 'Tag Input with Chips',
        category: 'animated-input',
        description: 'Add and remove tags with smooth bounce-in animations.',
        tags: ['input', 'tag', 'chips'],
        preview: `
      <div class="flex flex-wrap gap-2 p-3 bg-gray-900/50 rounded-xl border-2 border-gray-700 focus-within:border-cyan-500 transition-all duration-300 min-h-16">
          <div class="flex flex-wrap gap-2">
              <span class="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm animate-bounce-in">React</span>
          </div>
          <input type="text" class="flex-1 bg-transparent border-none outline-none text-white text-sm" placeholder="Add tag...">
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const TagInput = () => {
    const [tags, setTags] = useState(['React', 'Tailwind']);
    const [input, setInput] = useState('');

    const addTag = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            setTags([...tags, input.trim()]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-wrap gap-2 p-3 bg-gray-900/50 rounded-xl border-2 border-gray-700 focus-within:border-cyan-500 transition-all duration-300">
            {tags.map((tag, i) => (
                <span key={i} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm animate-bounce-in flex items-center">
                    {tag}
                    <button onClick={() => setTags(tags.filter((_, idx) => idx !== i))} className="ml-2">×</button>
                </span>
            ))}
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={addTag}
                className="flex-1 bg-transparent border-none outline-none text-white text-sm" 
                placeholder="Add tag..."
            />
        </div>
    );
};

export default TagInput;`
        }
    },
    {
        id: 'input-slider-animated',
        name: 'Animated Slider Input',
        category: 'animated-input',
        description: 'Interactive slider with an animated thumb and value display.',
        tags: ['input', 'slider', 'range'],
        preview: `
      <div class="w-full max-w-md mx-auto space-y-4">
          <div class="flex justify-between text-white font-medium">
              <span>Volume</span>
              <span class="text-red-400 font-bold">50%</span>
          </div>
          <input type="range" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500" 
                 oninput="this.parentElement.firstElementChild.lastElementChild.textContent = this.value + '%'">
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const AnimatedSlider = () => {
    const [value, setValue] = useState(50);

    return (
        <div className="w-full space-y-4">
            <div className="flex justify-between text-white font-medium">
                <span>Volume</span>
                <span className="text-red-400 font-bold">{value}%</span>
            </div>
            <input 
                type="range"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500 hover:scale-x-105 transition-transform" 
            />
        </div>
    );
};

export default AnimatedSlider;`
        }
    },
    {
        id: 'input-country-select',
        name: 'Animated Country Select',
        category: 'animated-input',
        description: 'Country select with flag animations on change.',
        tags: ['input', 'select', 'flags'],
        preview: `
      <div class="relative flex items-center bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 focus-within:border-lime-500 transition-all duration-300">
          <div class="mr-3 text-2xl animate-bounce-in">🇺🇸</div>
          <select class="bg-transparent text-white outline-none appearance-none w-full" 
                  onchange="this.previousElementSibling.textContent = this.value; this.previousElementSibling.classList.remove('animate-bounce-in'); void this.previousElementSibling.offsetWidth; this.previousElementSibling.classList.add('animate-bounce-in');">
              <option value="🇺🇸">United States</option>
              <option value="🇬🇧">United Kingdom</option>
          </select>
          <i class="fas fa-chevron-down text-gray-500"></i>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const CountrySelect = () => {
    const [flag, setFlag] = useState('🇺🇸');

    return (
        <div className="relative flex items-center bg-gray-900 border-2 border-gray-700 rounded-xl px-4 py-4 focus-within:border-lime-500 transition-all duration-300">
            <div key={flag} className="mr-3 text-2xl animate-bounce-in">{flag}</div>
            <select 
                onChange={(e) => setFlag(e.target.value)}
                className="bg-transparent text-white outline-none appearance-none w-full cursor-pointer"
            >
                <option value="🇺🇸">United States</option>
                <option value="🇬🇧">United Kingdom</option>
                <option value="🇨🇦">Canada</option>
            </select>
            <span className="text-gray-500">▼</span>
        </div>
    );
};

export default CountrySelect;`
        }
    },
    {
        id: 'input-file-upload',
        name: 'File Upload with Progress',
        category: 'animated-input',
        description: 'Animated file upload area with progress bar simulation.',
        tags: ['input', 'file', 'upload'],
        preview: `
      <div class="w-full max-w-md mx-auto space-y-4">
          <div class="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-violet-500 transition-all cursor-pointer"
               onclick="const p = this.nextElementSibling; p.classList.remove('hidden'); let w=0; const int = setInterval(()=>{w+=5; p.lastElementChild.firstElementChild.style.width=w+'%'; if(w>=100) clearInterval(int)}, 100)">
              <div class="text-violet-400 text-3xl mb-2"><i class="fas fa-cloud-upload-alt"></i></div>
              <p class="text-white text-sm">Click to simulate upload</p>
          </div>
          <div class="hidden h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="h-full w-0 bg-violet-500 transition-all duration-300"></div>
          </div>
      </div>
    `,
        code: {
            react: `import React, { useState } from 'react';

const FileUpload = () => {
    const [progress, setProgress] = useState(0);

    const simulateUpload = () => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    return (
        <div className="w-full space-y-4">
            <div 
                onClick={simulateUpload}
                className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-violet-500 transition-all cursor-pointer group"
            >
                <div className="text-violet-400 text-3xl mb-2 group-hover:scale-110 transition-transform">☁️</div>
                <p className="text-white text-sm">Click to simulate upload</p>
            </div>
            {progress > 0 && (
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-violet-500 transition-all duration-300" 
                        style={{ width: \`\${progress}%\` }}
                    />
                </div>
            )}
        </div>
    );
};

export default FileUpload;`
        }
    }
];
