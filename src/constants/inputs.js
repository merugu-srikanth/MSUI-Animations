export const INPUTS = [
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
               class="floating-label absolute left-4 top-2 text-gray-400 bg-brand-dark p-1 pointer-events-none transition-all duration-300">
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

    },
    {
        id: 'input-subscribe-anim',
        name: 'Subscribe with Animation',
        category: 'animated-input',
        description: 'Email subscription input with embedded button and underline animation.',
        tags: ['input', 'subscribe', 'button', 'animation'],
        preview: `
      <div class="group relative w-full max-w-md mx-auto">
        <label class="text-sm font-medium text-gray-300 mb-2 block">Subscribe with Animation</label>
        <div class="relative">
            <input type="email" 
                   placeholder="your@email.com"
                   class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 border border-gray-700/50 group-hover:border-violet-500/30 transition-all duration-300">
            <button class="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-violet-500/20">
                <i class="fas fa-paper-plane mr-2"></i>Subscribe
            </button>
            <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const SubscribeInput = () => {
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Subscribe with Animation</label>
            <div className="relative">
                <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 border border-gray-700/50 group-hover:border-violet-500/30 transition-all duration-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-violet-500/20">
                    <i className="fas fa-paper-plane mr-2"></i>Subscribe
                </button>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default SubscribeInput;`
        }
    },
    {
        id: 'input-pass-strength-anim',
        name: 'Animated Password Field',
        category: 'animated-input',
        description: 'Password field with visibility toggle and animated strength bars.',
        tags: ['input', 'password', 'strength', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Animated Password Field</label>
          <div class="relative">
              <input type="password" 
                     id="password-anim"
                     placeholder="Enter password"
                     class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 pr-12">
              <button type="button" 
                      onclick="const i=this.previousElementSibling; i.type=i.type==='password'?'text':'password'; this.firstElementChild.classList.toggle('fa-eye'); this.firstElementChild.classList.toggle('fa-eye-slash');"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                  <i class="fas fa-eye"></i>
              </button>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
              
              <div class="flex gap-1 mt-2">
                  <div class="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-0 bg-red-500 group-hover:w-1/3 transition-all duration-700"></div>
                  </div>
                  <div class="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-0 bg-yellow-500 group-hover:w-2/3 transition-all duration-700 delay-100"></div>
                  </div>
                  <div class="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-0 bg-green-500 group-hover:w-full transition-all duration-700 delay-200"></div>
                  </div>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const AnimatedPasswordInput = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Animated Password Field</label>
            <div className="relative">
                <input 
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 pr-12"
                />
                <button 
                    type="button" 
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-300 transition-colors duration-300"
                >
                    <i className={show ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </button>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
                
                <div className="flex gap-1 mt-2">
                    <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-red-500 group-hover:w-1/3 transition-all duration-700"></div>
                    </div>
                    <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-yellow-500 group-hover:w-2/3 transition-all duration-700 delay-100"></div>
                    </div>
                    <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-green-500 group-hover:w-full transition-all duration-700 delay-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedPasswordInput;`
        }
    },
    {
        id: 'input-textarea-anim',
        name: 'Animated Textarea',
        category: 'animated-input',
        description: 'Textarea with character counter and bottom gradient line animation.',
        tags: ['input', 'textarea', 'counter', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Animated Textarea</label>
          <div class="relative">
              <textarea 
                  placeholder="Type your message here..."
                  rows="4"
                  maxlength="200"
                  class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 border border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-300 resize-none"
                  oninput="this.nextElementSibling.firstElementChild.textContent = this.value.length"></textarea>
              <div class="absolute bottom-2 right-3 text-xs text-gray-500">
                  <span class="text-emerald-400">0</span>/200
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const AnimatedTextarea = () => {
    const [len, setLen] = useState(0);
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Animated Textarea</label>
            <div className="relative">
                <textarea 
                    placeholder="Type your message here..."
                    rows={4}
                    maxLength={200}
                    onChange={(e) => setLen(e.target.value.length)}
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 border border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-300 resize-none"
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-500">
                    <span className="text-emerald-400">{len}</span>/200
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default AnimatedTextarea;`
        }
    },
    {
        id: 'input-cart-qty',
        name: 'Add to Cart Quantity',
        category: 'animated-input',
        description: 'Quantity selector with plus/minus buttons and add button.',
        tags: ['input', 'quantity', 'cart', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Add to Cart Quantity</label>
          <div class="flex items-center gap-3">
              <button class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-700/50 hover:border-amber-500/30 shadow-lg cursor-pointer" onclick="const i=this.nextElementSibling.firstElementChild; if(i.value>1) i.value--">
                  <i class="fas fa-minus text-lg"></i>
              </button>
              
              <div class="relative flex-1">
                  <input type="number" 
                         value="1"
                         min="1"
                         max="99"
                         class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300">
                  <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
              </div>
              
              <button class="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-700/50 hover:border-amber-500/30 shadow-lg cursor-pointer" onclick="const i=this.previousElementSibling.firstElementChild; i.value++">
                  <i class="fas fa-plus text-lg"></i>
              </button>
              
              <button class="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer">
                  <i class="fas fa-shopping-cart"></i>
                  <span>Add</span>
              </button>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const CartQuantity = () => {
    const [qty, setQty] = useState(1);
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Add to Cart Quantity</label>
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-700/50 hover:border-amber-500/30 shadow-lg"
                >
                    <i className="fas fa-minus text-lg"></i>
                </button>
                
                <div className="relative flex-1">
                    <input 
                        type="number" 
                        value={qty}
                        onChange={(e) => setQty(parseInt(e.target.value) || 1)}
                        min="1"
                        max="99"
                        className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
                </div>
                
                <button 
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 hover:text-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-700/50 hover:border-amber-500/30 shadow-lg"
                >
                    <i className="fas fa-plus text-lg"></i>
                </button>
                
                <button className="px-6 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center gap-2">
                    <i className="fas fa-shopping-cart"></i>
                    <span>Add</span>
                </button>
            </div>
        </div>
    );
};

export default CartQuantity;`
        }
    },
    {
        id: 'input-search-filter',
        name: 'Advanced Search',
        category: 'animated-input',
        description: 'Search bar with embedded dropdown and animated button.',
        tags: ['input', 'search', 'filter', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Advanced Search</label>
          <div class="relative">
              <input type="search" 
                     placeholder="Search anything..."
                     class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300 pr-32">
              <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <select class="bg-gray-900/80 text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 cursor-pointer">
                      <option>All</option>
                      <option>Products</option>
                      <option>Users</option>
                      <option>Posts</option>
                  </select>
                  <button class="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer">
                      <i class="fas fa-search"></i>
                  </button>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const AdvancedSearch = () => {
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Advanced Search</label>
            <div className="relative">
                <input 
                    type="search" 
                    placeholder="Search anything..."
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300 pr-32"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <select className="bg-gray-900/80 text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 cursor-pointer">
                        <option>All</option>
                        <option>Products</option>
                        <option>Users</option>
                        <option>Posts</option>
                    </select>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full group-focus-within:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default AdvancedSearch;`
        }
    },
    {
        id: 'input-file-anim',
        name: 'Animated File Upload',
        category: 'animated-input',
        description: 'Drag and drop file upload with hover effects and progress simulation.',
        tags: ['input', 'file', 'upload', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Animated File Upload</label>
          <div class="relative border-2 border-dashed border-gray-700/50 rounded-xl p-8 text-center hover:border-violet-500/50 transition-all duration-300 group-hover:bg-violet-900/10 cursor-pointer">
              <input type="file" 
                     class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                     onchange="this.nextElementSibling.innerHTML = '<div class=\\'space-y-3\\'><div class=\\'w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-600/20 to-green-600/20 flex items-center justify-center animate-bounce\\'><i class=\\'fas fa-check text-2xl text-emerald-400\\'></i></div><div><p class=\\'text-white font-medium\\'>' + (this.files[0]?.name || 'File uploaded') + '</p><p class=\\'text-gray-400 text-sm mt-1\\'>Uploaded successfully</p></div></div>'">
              <div class="space-y-3 pointer-events-none">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i class="fas fa-cloud-upload-alt text-2xl text-violet-400"></i>
                  </div>
                  <div>
                      <p class="text-white font-medium">Drop files here or click to upload</p>
                      <p class="text-gray-400 text-sm mt-1">Max file size: 10MB</p>
                  </div>
                  <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div class="h-full w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-3/4 transition-all duration-1000"></div>
                  </div>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const AnimatedFileUpload = () => {
    const [file, setFile] = useState(null);

    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Animated File Upload</label>
            <div className="relative border-2 border-dashed border-gray-700/50 rounded-xl p-8 text-center hover:border-violet-500/50 transition-all duration-300 group-hover:bg-violet-900/10 cursor-pointer">
                <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                {!file ? (
                    <div className="space-y-3 pointer-events-none">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <i className="fas fa-cloud-upload-alt text-2xl text-violet-400"></i>
                        </div>
                        <div>
                            <p className="text-white font-medium">Drop files here or click to upload</p>
                            <p className="text-gray-400 text-sm mt-1">Max file size: 10MB</p>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-3/4 transition-all duration-1000"></div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3 pointer-events-none">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-emerald-600/20 to-green-600/20 flex items-center justify-center animate-bounce">
                            <i className="fas fa-check text-2xl text-emerald-400"></i>
                        </div>
                        <div>
                            <p className="text-white font-medium">{file.name}</p>
                            <p className="text-gray-400 text-sm mt-1">Uploaded successfully</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnimatedFileUpload;`
        }
    },
    {
        id: 'input-color-anim',
        name: 'Color Picker',
        category: 'animated-input',
        description: 'Color input with a matching gradient sample box.',
        tags: ['input', 'color', 'picker', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Color Picker</label>
          <div class="relative">
              <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 group-hover:scale-110 transition-transform duration-300"></div>
                  <input type="color" 
                         value="#8b5cf6"
                         class="w-full h-12 px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 border border-gray-700/50 group-hover:border-violet-500/30 transition-all duration-300 cursor-pointer">
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-500"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState('#8b5cf6');
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Color Picker</label>
            <div className="relative">
                <div className="flex items-center gap-3">
                    <div 
                        className="w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: color }}
                    />
                    <input 
                        type="color" 
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-full h-12 px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 border border-gray-700/50 group-hover:border-violet-500/30 transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default ColorPicker;`
        }
    },
    {
        id: 'input-switch-anim',
        name: 'Animated Switch',
        category: 'animated-input',
        description: 'Toggle switch with sliding animation and icon change.',
        tags: ['input', 'switch', 'toggle', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Animated Switch</label>
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
               onclick="this.querySelector('.switch-bg').classList.toggle('bg-emerald-900'); this.querySelector('.switch-toggle').classList.toggle('translate-x-6'); this.querySelector('.switch-toggle').classList.toggle('bg-emerald-400'); this.querySelector('.switch-toggle').classList.toggle('bg-gray-400'); this.querySelector('.bell-icon').classList.toggle('text-emerald-400');">
              <div class="flex items-center gap-3">
                  <div class="switch-bg w-10 h-6 rounded-full bg-gray-700 relative transition-colors duration-300">
                      <div class="switch-toggle absolute top-1 left-1 w-4 h-4 rounded-full bg-gray-400 transition-all duration-300"></div>
                  </div>
                  <span class="text-white">Enable Notifications</span>
              </div>
              <i class="bell-icon fas fa-bell text-gray-400 transition-colors duration-300"></i>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const AnimatedSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Animated Switch</label>
            <div 
                onClick={() => setEnabled(!enabled)}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <div className={\`w-10 h-6 rounded-full relative transition-colors duration-300 \${enabled ? 'bg-emerald-900' : 'bg-gray-700'}\`}>
                        <div className={\`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 \${enabled ? 'translate-x-4 bg-emerald-400' : 'bg-gray-400'}\`}></div>
                    </div>
                    <span className="text-white">Enable Notifications</span>
                </div>
                <i className={\`fas fa-bell transition-colors duration-300 \${enabled ? 'text-emerald-400' : 'text-gray-400'}\`}></i>
            </div>
        </div>
    );
};

export default AnimatedSwitch;`
        }
    },
    {
        id: 'input-rating-anim',
        name: 'Interactive Rating',
        category: 'animated-input',
        description: 'Star rating component with hover effects and scaling animation.',
        tags: ['input', 'rating', 'star', 'animation'],
        preview: `
      <div class="group w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300 mb-2 block">Interactive Rating</label>
          <div class="p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300">
              <div class="flex justify-center gap-1 mb-3">
                  <i class="fas fa-star text-2xl text-gray-600 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110" onclick="this.parentElement.nextElementSibling.firstElementChild.textContent='1.0'"></i>
                  <i class="fas fa-star text-2xl text-gray-600 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110" onclick="this.parentElement.nextElementSibling.firstElementChild.textContent='2.0'"></i>
                  <i class="fas fa-star text-2xl text-gray-600 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110" onclick="this.parentElement.nextElementSibling.firstElementChild.textContent='3.0'"></i>
                  <i class="fas fa-star text-2xl text-gray-600 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110" onclick="this.parentElement.nextElementSibling.firstElementChild.textContent='4.0'"></i>
                  <i class="fas fa-star text-2xl text-gray-600 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-110" onclick="this.parentElement.nextElementSibling.firstElementChild.textContent='5.0'"></i>
              </div>
              <div class="text-center">
                  <span class="text-amber-400 font-bold text-xl">0.0</span>
                  <span class="text-gray-400"> / 5.0</span>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React, { useState } from 'react';

const InteractiveRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="group w-full max-w-md">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Interactive Rating</label>
            <div className="p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700/50 group-hover:border-amber-500/30 transition-all duration-300">
                <div className="flex justify-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i 
                            key={star}
                            className={\`fas fa-star text-2xl cursor-pointer transition-all duration-300 hover:scale-110 \${(hover || rating) >= star ? 'text-amber-400' : 'text-gray-600'}\`}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(star)}
                        ></i>
                    ))}
                </div>
                <div className="text-center">
                    <span className="text-amber-400 font-bold text-xl">{rating.toFixed(1)}</span>
                    <span className="text-gray-400"> / 5.0</span>
                </div>
            </div>
        </div>
    );
};

export default InteractiveRating;`
        }
    },
    {
        id: 'input-grad-glow',
        name: 'Gradient Glow Input',
        category: 'animated-input',
        description: 'Input with a glowing gradient border and pulse effect.',
        tags: ['input', 'glow', 'gradient', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Gradient Glow Input</label>
          <div class="relative">
              <input type="text" 
                     placeholder="Enter your text"
                     class="w-full px-4 py-3.5 bg-gray-900/50 border-2 border-transparent rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:bg-gray-900/70 transition-all duration-300"
                     style="background-image: linear-gradient(to right, #0f172a, #0f172a), linear-gradient(to right, #8b5cf6, #3b82f6, #10b981);
                            background-origin: border-box;
                            background-clip: padding-box, border-box;
                            box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);">
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-sparkles text-violet-400 text-sm animate-pulse"></i>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const GradientGlowInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Gradient Glow Input</label>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Enter your text"
                    className="w-full px-4 py-3.5 bg-gray-900/50 border-2 border-transparent rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:bg-gray-900/70 transition-all duration-300"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #0f172a, #0f172a), linear-gradient(to right, #8b5cf6, #3b82f6, #10b981)',
                        backgroundOrigin: 'border-box',
                        backgroundClip: 'padding-box, border-box',
                        boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
                    }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-sparkles text-violet-400 text-sm animate-pulse"></i>
                </div>
            </div>
        </div>
    );
};

export default GradientGlowInput;`
        }
    },
    {
        id: 'input-glass-morph',
        name: 'Glass Morphism',
        category: 'animated-input',
        description: 'Input with glassmorphism effect and fingerprint reveal.',
        tags: ['input', 'glass', 'blur', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Glass Morphism</label>
          <div class="relative group">
              <input type="text" 
                     placeholder="Type here..."
                     class="w-full px-4 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white/10 focus:border-white/20 transition-all duration-300">
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300">
                  <i class="fas fa-fingerprint text-cyan-300"></i>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-focus-within:w-full transition-all duration-300"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const GlassInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Glass Morphism</label>
            <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Type here..."
                    className="w-full px-4 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:bg-white/10 focus:border-white/20 transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300">
                    <i className="fas fa-fingerprint text-cyan-300"></i>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-focus-within:w-full transition-all duration-300"></div>
            </div>
        </div>
    );
};

export default GlassInput;`
        }
    },
    {
        id: 'input-anim-border-2',
        name: 'Animated Border Glow',
        category: 'animated-input',
        description: 'Input with a continuously glowing and moving border gradient.',
        tags: ['input', 'border', 'glow', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Animated Border</label>
          <div class="relative p-0.5 rounded-xl animate-glow overflow-hidden">
              <input type="text" 
                     placeholder="Your input here"
                     class="w-full px-4 py-3.5 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-0 relative z-10">
              <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-50 blur-sm animate-pulse-soft -z-0"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const AnimatedBorderInput2 = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Animated Border</label>
            <div className="relative p-0.5 rounded-xl animate-glow overflow-hidden">
                <input 
                    type="text" 
                    placeholder="Your input here"
                    className="w-full px-4 py-3.5 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-0 relative z-10"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-50 blur-sm animate-pulse-soft"></div>
            </div>
        </div>
    );
};

export default AnimatedBorderInput2;`
        }
    },
    {
        id: 'input-float-anim',
        name: 'Floating Label Animated',
        category: 'animated-input',
        description: 'Input with a floating label and focus indicator dot.',
        tags: ['input', 'floating', 'label', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Floating Label</label>
          <div class="relative">
              <input type="text" 
                     id="floating-input-anim"
                     placeholder=" "
                     class="peer w-full px-4 py-3.5 bg-gray-900/70 border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all duration-300">
              <label for="floating-input-anim" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 bg-gray-900 px-1 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-violet-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs">Enter your name</label>
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const FloatingLabelAnim = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Floating Label</label>
            <div className="relative">
                <input 
                    type="text" 
                    id="floating-input-anim"
                    placeholder=" "
                    className="peer w-full px-4 py-3.5 bg-gray-900/70 border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500 transition-all duration-300"
                />
                <label 
                    htmlFor="floating-input-anim" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 bg-gray-900 px-1 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-violet-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-xs"
                >
                    Enter your name
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                </div>
            </div>
        </div>
    );
};

export default FloatingLabelAnim;`
        }
    },
    {
        id: 'input-typewriter',
        name: 'Typewriter Style',
        category: 'animated-input',
        description: 'Input with a typewriter cursor and wave animation on bottom.',
        tags: ['input', 'typewriter', 'cursor', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Typewriter Style</label>
          <div class="relative">
              <input type="text" 
                     placeholder="Start typing..."
                     class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-violet-500 rounded-r-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300">
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-keyboard text-amber-400 animate-pulse"></i>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-wave"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const TypewriterInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Typewriter Style</label>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Start typing..."
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-violet-500 rounded-r-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-keyboard text-amber-400 animate-pulse"></i>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-wave"></div>
            </div>
        </div>
    );
};

export default TypewriterInput;`
        }
    },
    {
        id: 'input-particles',
        name: 'Particle Field Input',
        category: 'animated-input',
        description: 'Input overlaid with floating particles for a sci-fi effect.',
        tags: ['input', 'particles', 'sci-fi', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Particle Field</label>
          <div class="relative overflow-hidden rounded-xl border border-gray-700">
              <input type="text" 
                     placeholder="Watch the particles..."
                     class="w-full px-4 py-3.5 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-0 relative z-10">
              <div class="absolute inset-0 pointer-events-none overflow-hidden">
                  <div class="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style="top: 20%; left: 10%; animation-delay: 0s;"></div>
                  <div class="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style="top: 60%; left: 30%; animation-delay: 0.5s;"></div>
                  <div class="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style="top: 40%; left: 70%; animation-delay: 1s;"></div>
                  <div class="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style="top: 80%; left: 50%; animation-delay: 1.5s;"></div>
                  <div class="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style="top: 30%; left: 90%; animation-delay: 2s;"></div>
              </div>
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <i class="fas fa-atom text-cyan-400"></i>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const ParticleInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Particle Field</label>
            <div className="relative overflow-hidden rounded-xl border border-gray-700">
                <input 
                    type="text" 
                    placeholder="Watch the particles..."
                    className="w-full px-4 py-3.5 bg-gray-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-0 relative z-10"
                />
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
                    <div className="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style={{top: '60%', left: '30%', animationDelay: '0.5s'}}></div>
                    <div className="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style={{top: '40%', left: '70%', animationDelay: '1s'}}></div>
                    <div className="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style={{top: '80%', left: '50%', animationDelay: '1.5s'}}></div>
                    <div className="absolute w-1 h-1 bg-violet-500/60 rounded-full animate-float" style={{top: '30%', left: '90%', animationDelay: '2s'}}></div>
                </div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <i className="fas fa-atom text-cyan-400"></i>
                </div>
            </div>
        </div>
    );
};

export default ParticleInput;`
        }
    },
    {
        id: 'input-neon-cyber',
        name: 'Neon Cyber Input',
        category: 'animated-input',
        description: 'Futuristic input with neon glow borders and terminal icon.',
        tags: ['input', 'neon', 'cyber', 'glow'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Neon Cyber</label>
          <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <input type="text" 
                     placeholder="Cyber text..."
                     class="relative w-full px-4 py-3.5 bg-gray-950 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-800 group-hover:border-transparent">
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-terminal text-violet-300 group-hover:text-pink-300 transition-colors duration-300"></i>
              </div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-3/4 transition-all duration-500"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const NeonInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Neon Cyber</label>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-pink-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <input 
                    type="text" 
                    placeholder="Cyber text..."
                    className="relative w-full px-4 py-3.5 bg-gray-950 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-800 group-hover:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-terminal text-violet-300 group-hover:text-pink-300 transition-colors duration-300"></i>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-3/4 transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default NeonInput;`
        }
    },
    {
        id: 'input-shimmer-load',
        name: 'Shimmer Loading Input',
        category: 'animated-input',
        description: 'Input with a continuous shimmer effect indicating loading or active state.',
        tags: ['input', 'shimmer', 'loading', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Shimmer Loading</label>
          <div class="relative overflow-hidden rounded-xl border border-gray-700">
              <input type="text" 
                     placeholder="Loading effect..."
                     class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-0 relative z-10">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <i class="fas fa-sync-alt text-blue-400 animate-spin" style="animation-duration: 1.5s"></i>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const ShimmerInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Shimmer Loading</label>
            <div className="relative overflow-hidden rounded-xl border border-gray-700">
                <input 
                    type="text" 
                    placeholder="Loading effect..."
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-0 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <i className="fas fa-sync-alt text-blue-400 animate-spin" style={{animationDuration: '1.5s'}}></i>
                </div>
            </div>
        </div>
    );
};

export default ShimmerInput;`
        }
    },
    {
        id: 'input-morph-grad',
        name: 'Morphing Gradient Input',
        category: 'animated-input',
        description: 'Input partial background gradient reveal on hover.',
        tags: ['input', 'gradient', 'morph', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Morphing Gradient</label>
          <div class="relative group">
              <input type="text" 
                     placeholder="Gradient morph..."
                     class="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-700 group-hover:border-transparent transition-all duration-500">
              <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-palette text-purple-300 group-hover:rotate-180 transition-transform duration-500"></i>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-full transition-all duration-700"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const MorphingInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Morphing Gradient</label>
            <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Gradient morph..."
                    className="w-full px-4 py-3.5 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-700 group-hover:border-transparent transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-palette text-purple-300 group-hover:rotate-180 transition-transform duration-500"></i>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-full transition-all duration-700"></div>
            </div>
        </div>
    );
};

export default MorphingInput;`
        }
    },
    {
        id: 'input-holo',
        name: 'Holographic Input',
        category: 'animated-input',
        description: 'Input with holographic glowing edges and pulse effect.',
        tags: ['input', 'holograph', 'glow', 'futuristic'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Holographic</label>
          <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div class="relative bg-gray-900 rounded-xl p-0.5">
                  <input type="text" 
                         placeholder="Hologram text..."
                         class="w-full px-4 py-3.5 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0">
              </div>
              <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-project-diagram text-cyan-300 animate-pulse-soft"></i>
              </div>
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const HolographicInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Holographic</label>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-gray-900 rounded-xl p-0.5">
                    <input 
                        type="text" 
                        placeholder="Hologram text..."
                        className="w-full px-4 py-3.5 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                    />
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-project-diagram text-cyan-300 animate-pulse-soft"></i>
                </div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            </div>
        </div>
    );
};

export default HolographicInput;`
        }
    },
    {
        id: 'input-matrix-rain',
        name: 'Matrix Rain Input',
        category: 'animated-input',
        description: 'Input with a matrix-like digital rain animation effect.',
        tags: ['input', 'matrix', 'rain', 'code'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Matrix Rain</label>
          <div class="relative overflow-hidden rounded-xl border border-emerald-700/50">
              <input type="text" 
                     placeholder="Enter the matrix..."
                     class="w-full px-4 py-3.5 bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-emerald-500 relative z-10">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-wave opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"></div>
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <i class="fas fa-code text-emerald-400"></i>
              </div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const MatrixInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Matrix Rain</label>
            <div className="relative overflow-hidden rounded-xl border border-emerald-700/50">
                <input 
                    type="text" 
                    placeholder="Enter the matrix..."
                    className="w-full px-4 py-3.5 bg-gray-900/80 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-emerald-500 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-wave opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"></div>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <i className="fas fa-code text-emerald-400"></i>
                </div>
            </div>
        </div>
    );
};

export default MatrixInput;`
        }
    },
    {
        id: 'input-liquid-merc',
        name: 'Liquid Mercury',
        category: 'animated-input',
        description: 'Input with a liquid metal effect on focus and hover.',
        tags: ['input', 'liquid', 'metal', 'animation'],
        preview: `
      <div class="space-y-3 w-full max-w-md mx-auto">
          <label class="text-sm font-medium text-gray-300">Liquid Mercury</label>
          <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700"></div>
              <input type="text" 
                     placeholder="Fluid input..."
                     class="relative w-full px-4 py-3.5 bg-transparent rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-700/50 group-hover:border-gray-600/70">
              <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="fas fa-tint text-slate-300 group-hover:animate-float"></i>
              </div>
              <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 group-hover:w-full group-focus-within:w-full transition-all duration-1000"></div>
          </div>
      </div>
        `,
        code: {
            react: `import React from 'react';

const LiquidInput = () => {
    return (
        <div className="space-y-3 w-full max-w-md">
            <label className="text-sm font-medium text-gray-300">Liquid Mercury</label>
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-gray-600/20 to-slate-600/20 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700"></div>
                <input 
                    type="text" 
                    placeholder="Fluid input..."
                    className="relative w-full px-4 py-3.5 bg-transparent rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-0 border border-gray-700/50 group-hover:border-gray-600/70"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-tint text-slate-300 group-hover:animate-float"></i>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 via-gray-400 to-slate-400 group-hover:w-full group-focus-within:w-full transition-all duration-1000"></div>
            </div>
        </div>
    );
};

export default LiquidInput;`
        }
    }
];
