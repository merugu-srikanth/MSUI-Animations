import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Coffee, Sparkles, Zap, Heart, Crown, Shield, HelpCircle, FileText, User } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import qrCodeImage from '../../assets/qr-code.jpg';

const ViewCodeModal = ({ isOpen, onClose, code }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(code)[0]);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(() =>
    Math.floor(Math.random() * (300 - 40 + 1)) + 40
  );
  const [liked, setLiked] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0); // Start with 0
  const [showToast, setShowToast] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);
  const [upiCopied, setUpiCopied] = useState(false);

  useEffect(() => {
    if (isOpen && code && Object.keys(code).length > 0) {
      setActiveTab(prev => code[prev] ? prev : Object.keys(code)[0]);
      setLiked(false); // reset like on open
      setSelectedAmount(0); // Reset amount on open
      setQrVisible(false); // Hide QR on open
    }
  }, [isOpen, code]);

  useEffect(() => {
    const savedLike = localStorage.getItem('liked_component');
    if (savedLike === 'true') setLiked(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('liked_component', liked);
  }, [liked]);

  // Toast logic for amount selection
  useEffect(() => {
    if (selectedAmount > 0) {
      setShowToast(true);
      setQrVisible(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedAmount]);

  const handleLike = () => {
    setLiked(prevLiked => {
      setCount(prevCount =>
        prevLiked ? Math.max(prevCount - 1, 0) : prevCount + 1
      );
      return !prevLiked;
    });
  };

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('brunoui@ptaxis');
    setUpiCopied(true);
    setTimeout(() => setUpiCopied(false), 2000);
  };

  const amounts = [1, 5, 10, 25, 50, 100];
  const upiId = "brunoui@ptaxis";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=brunoui@ptaxis&pn=Shivani%20Developer&am=${selectedAmount}&cu=INR`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6
                 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[96%] md:w-[95%] max-w-6xl h-[85vh]
                  bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]
                  rounded-2xl shadow-2xl border border-white/20
                  flex flex-col overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `
        }}
      >
        {/* ================= HEADER ================= */}
        <div className="relative flex items-center px-6 py-4 bg-gradient-to-r from-white/5 to-white/[0.02] border-b border-white/10">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="relative w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 
                       hover:from-red-300 hover:to-red-500 transition-all duration-200
                       flex items-center justify-center shadow-lg"
            >
              <X
                size={8}
                className="absolute  text-white transition"
              />
            </button>
            <span onClick={onClose} className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
            <span onClick={onClose} className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
          </div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-brand-primary animate-pulse" />
              <span className="text-sm text-white font-semibold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Component Code
              </span>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Side - Code Preview (70%) */}
          <div className="md:w-[70%] w-[100%] flex flex-col border-r border-white/10">
            {/* Tabs */}
            <div className="flex items-center px-6 py-3 bg-gradient-to-r from-white/5 to-transparent">
              <div className="flex gap-1 bg-white/[0.03] rounded-lg p-1 border border-white/10">
                {Object.keys(code).map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveTab(type)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                      ${activeTab === type
                        ? 'bg-gradient-to-r from-brand-primary to-red-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="ml-auto md:block hidden flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 text-xs transition-all duration-300
                    ${liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'}
                  `}
                >
                  <Heart
                    size={24}
                    title={liked ? 'Unlike this component' : 'Like this component'}
                    className={`
                      transition-all duration-300
                      ${liked
                        ? 'fill-red-500 text-red-500 scale-110 animate-pulse'
                        : 'text-brand-primary'}
                    `}
                  />
                  <span className='text-orange-400'>{count}+ developers</span>
                </button>
              </div>
            </div>

            {/* Code Area */}
            <div className="relative flex-1 overflow-hidden group">
              {/* Copy Button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2
                           bg-gradient-to-r from-brand-primary/90 to-red-600/90
                           hover:from-brand-primary hover:to-red-600
                           rounded-xl border border-white/20
                           backdrop-blur-xl text-sm text-white font-medium
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-green-300" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy Code
                    </>
                  )}
                </button>
              </div>

              {/* Code */}
              <div className="h-full overflow-auto custom-scrollbar">
                <SyntaxHighlighter
                  language={activeTab === 'react' ? 'jsx' : 'html'}
                  style={vscDarkPlus}
                  showLineNumbers
                  customStyle={{
                    background: 'transparent',
                    margin: 0,
                    padding: '2rem',
                    fontSize: '13px',
                    lineHeight: '1.6',
                  }}
                >
                  {code[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* Right Side - Buy Me Coffee (30%) */}
          <div className="w-[30%] md:block hidden flex flex-col bg-gradient-to-b from-[#0f0f23]/90 to-[#1a1a2e]/90 backdrop-blur-sm border-l border-white/10 relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-purple-500/5">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Content - No scrolling, all content visible */}
            <div className="relative flex flex-col h-full p-4 space-y-3">
              {/* Header - Top */}
              <div className="text-center space-y-1">
                <div className="flex items-center justify-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur-sm"></div>
                    <div className="relative p-2 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-lg border border-white/10">
                      <Coffee className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-start font-bold text-brand-primary">Buy me a coffee</h3>
                    <p className="text-sm text-start text-gray-400">Support my work</p>
                  </div>
                </div>
                <p className="text-md animate-pulse shadow-sm shadow-brand-primary inline-block p-1 rounded-2xl text-white bg-brand-primary px-4">
                  Select an Amount to Reveal QR Code
                </p>
              </div>

              {/* Main Content - Amount + QR Side by Side */}
              <div className="flex-1 grid grid-cols-2 gap-2">
                {/* Left Column - Amount Selection */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-white">Select Amount (₹)</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[5, 10, 30, 50, 75, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          if (!qrVisible) setQrVisible(true);
                        }}
                        className={`p-3 rounded-lg border transition-all duration-200 relative overflow-hidden
                ${selectedAmount === amount
                            ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 border-amber-500/50 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                          }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1">
                          <div className="flex items-center gap-1">
                            <span className="text-base font-bold">₹{amount}</span>
                            {amount >= 50 && <Crown className="w-3 h-3 text-yellow-400" />}
                          </div>
                          {amount === 20 && (
                            <span className="absolute -top-2.5 right-1/2 translate-x-1/2">
                              {/* Glow */}
                              <span className="absolute inset-0 rounded-full bg-orange-500 blur-md opacity-50"></span>

                              {/* Badge */}
                              <span className="
                                                relative z-10
                                                px-3.5 py-0.2
                                                text-[9px] font-semibold
                                                text-white
                                                rounded-full
                                                bg-gradient-to-r from-amber-400 via-orange-500 to-red-500
                                                border border-white/30
                                                shadow-lg
                                                animate-pulse
                                              ">
                                Popular
                              </span>
                            </span>
                          )}
                          {amount === 100 && (
                            <span className="text-[10px] text-purple-400 font-semibold mt-1">
                              VIP ✨
                            </span>
                          )}
                        </div>
                        {selectedAmount === amount && (
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 animate-pulse"></div>
                        )}
                      </button>
                    ))}
                  </div>


                  {/* Footer Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Shield className="w-3 h-3 text-green-400 animate-pulse" />
                        <div className="absolute inset-0 bg-green-400/20 rounded-full blur-sm"></div>
                      </div>
                      <span>100% Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-400/70">
                      <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"></span>
                      <span>UPI Payments</span>
                      <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                    </div>
                  </div>

                  {/* Custom Amount */}
                  {/* <div className="pt-2">
                    <div className="relative group">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-amber-300 transition-colors">
                        ₹
                      </div>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-4 py-2
                       text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50
                       backdrop-blur-sm transition-all duration-300 text-sm
                       hover:bg-white/10 hover:border-amber-500/30"
                        value={selectedAmount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0;
                          setSelectedAmount(val);
                          if (val > 0 && !qrVisible) setQrVisible(true);
                        }}
                        min="1"
                      />
                    </div>
                  </div> */}
                </div>

                {/* Right Column - QR Code */}
                <div className="space-y-0 ">
                  {/* <h4 className="text-sm font-semibold text-white">QR Code</h4> */}
                  {qrVisible && selectedAmount > 0 ? (
                    <div className="space-y-2">
                      {/* QR Code Container */}
                      <div className="relative group">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 
                           group-hover:border-amber-500/30 transition-all duration-300">
                          {/* Replace this with your uploaded QR code image */}
                          <div className="bg-white  p-2 rounded-lg">
                            <img
                              src={qrCodeImage} // Replace with your image path
                              alt="UPI QR Code"
                              className="w-full  rounded-lg"
                            />
                          </div>

                          {/* Amount Badge */}
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 
                              text-white text-xs px-2 py-1 rounded-full animate-bounce shadow-lg">
                            ₹{selectedAmount}
                          </div>

                          {/* Scan Animation */}
                          <div className="absolute inset-x-4 top-4 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent 
                              rounded-full animate-scan"></div>

                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute -top-2 -left-2">
                          <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />
                        </div>
                      </div>

                      {/* UPI ID */}
                      <div className="bg-white/5 rounded-lg  border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                        <p className="font-mono text-sm text-white text-center">{upiId}</p>
                      </div>
                    </div>
                  ) : (
                    /* Placeholder before selection */
                    <div className="flex items-center justify-center h-[200px]">
                      <div className="text-center space-y-3">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/5 to-white/10 rounded-xl 
                           border-2 border-dashed border-white/20 flex items-center justify-center
                           group hover:border-amber-500/30 transition-all duration-300">
                          <Coffee className="w-12 h-12 text-amber-400/30 group-hover:text-amber-400/50 transition-colors" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] text-orange-500 animate-pulse">Select Amount to Show QR</p>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Section - Scan Message & Buttons */}
                  <div className="space-y-4">
                    {/* Scan Message */}
                    {qrVisible && selectedAmount > 0 && (
                      <div className="text-center space-y-2">

                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3">


                      <button
                        onClick={() => {
                          if (selectedAmount > 0) {
                            // Simulate payment completion
                            setSelectedAmount(0);
                            setQrVisible(false);
                          }
                        }}
                        className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
            flex items-center justify-center gap-2
            ${selectedAmount > 0
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white hover:scale-[1.02] active:scale-95'
                            : 'bg-white/10 text-gray-400 cursor-not-allowed'
                          }`}
                        disabled={selectedAmount === 0}
                      >
                        {selectedAmount > 0 ? (
                          <>
                            <Check className="w-4 h-4" />
                            Done
                          </>
                        ) : (
                          'Select Amount'
                        )}
                      </button>
                    </div>


                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className=" md:px-6 px-4 py-3 bg-gradient-to-r from-white/5 to-transparent
                      border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse"></div>
              <span className="text-sm text-gray-300">Ready to use</span>
            </div>
            <div className="ml-auto md:hidden block flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 text-xs transition-all duration-300
                    ${liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'}
                  `}
              >
                <Heart
                  size={24}
                  title={liked ? 'Unlike this component' : 'Like this component'}
                  className={`
                      transition-all duration-300
                      ${liked
                      ? 'fill-red-500 text-red-500 scale-110 animate-pulse'
                      : 'text-brand-primary'}
                    `}
                />
                <span className='text-orange-400'>{count}+ developers</span>
              </button>
            </div>

            <div className="md:hidden block">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-2 py-2
                           bg-gradient-to-r from-brand-primary/90 to-red-600/90
                           hover:from-brand-primary hover:to-red-600
                           rounded-xl border border-white/20
                           backdrop-blur-xl text-sm text-white font-medium
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-300" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy
                  </>
                )}
              </button>
            </div>
            {/* <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </span> */}
          </div>

          <div className="flex md:block hidden items-center gap-4">
            <span className="text-sm bg-brand-secondary p-1 px-2 rounded-full text-brand-primary">No Packages Need to Install</span>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && selectedAmount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm 
                        rounded-lg p-4 border border-green-500/30 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="font-medium text-white">Thank you! 🎉</p>
                <p className="text-sm text-gray-300">QR code ready for ₹{selectedAmount}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCodeModal;