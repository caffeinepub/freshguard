import { useState } from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface SharkVotePageProps {
  onBack: () => void;
}

export default function SharkVotePage({ onBack }: SharkVotePageProps) {
  const [inVotes, setInVotes] = useState(0);
  const [outVotes, setOutVotes] = useState(0);

  const totalVotes = inVotes + outVotes;
  const inPct = totalVotes === 0 ? 50 : Math.round((inVotes / totalVotes) * 100);
  const outPct = totalVotes === 0 ? 50 : 100 - inPct;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Back navigation */}
      <div className="px-4 pt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-dark font-semibold hover:text-brand transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Dark green gradient banner */}
      <div
        className="mt-4 mx-0 px-6 py-12 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #145214 0%, #1a6b1a 40%, #27ae60 80%, #2ecc71 100%)',
        }}
      >
        <p className="text-base md:text-lg font-medium tracking-widest uppercase opacity-80 mb-3">
          The Deal on the Table
        </p>
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          $325,000 for 12.5% of
          <br />
          FreshGuard
        </h1>
      </div>

      {/* Voting section */}
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-5">
        {/* IN button */}
        <button
          onClick={() => setInVotes((v) => v + 1)}
          className="w-full flex items-center justify-center gap-4 py-7 px-8 rounded-2xl text-white text-2xl font-black shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
          style={{ background: '#1a6b1a' }}
        >
          <span className="text-3xl">🦈</span>
          I'm IN! $325K for 12.5%
        </button>

        {/* OUT button */}
        <button
          onClick={() => setOutVotes((v) => v + 1)}
          className="w-full flex items-center justify-center gap-4 py-7 px-8 rounded-2xl text-red-600 text-2xl font-black border-2 border-red-500 bg-red-50 shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-red-100 hover:shadow-xl active:scale-[0.98]"
        >
          <AlertCircle className="w-8 h-8 text-red-500" />
          I'm OUT
        </button>

        {/* Vote tally row */}
        <div className="flex items-center justify-between pt-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦈</span>
            <span className="text-xl font-black text-brand-dark">IN</span>
            <span className="text-2xl font-black text-brand-dark ml-1">{inPct}%</span>
            <span className="text-base text-gray-500 font-medium">({inVotes} votes)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base text-gray-500 font-medium">({outVotes} votes)</span>
            <span className="text-2xl font-black text-red-600">{outPct}%</span>
            <span className="text-xl font-black text-red-600">OUT</span>
            <span className="text-2xl">🚪</span>
          </div>
        </div>

        {/* Split progress bar */}
        <div className="w-full h-8 rounded-full overflow-hidden flex shadow-inner">
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${inPct}%`,
              background: '#1a6b1a',
            }}
          />
          <div
            className="h-full transition-all duration-500 ease-out"
            style={{
              width: `${outPct}%`,
              background: '#dc2626',
            }}
          />
        </div>

        {/* Total votes */}
        <div className="text-center pt-2">
          <div className="text-5xl font-black text-charcoal">{totalVotes}</div>
          <div className="text-base text-gray-500 font-medium mt-1">total votes cast</div>
        </div>

        {/* Deal details card */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Deal Summary</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xl font-black text-brand-dark">$325K</div>
              <div className="text-xs text-gray-500 font-medium">Investment Ask</div>
            </div>
            <div>
              <div className="text-xl font-black text-brand-dark">12.5%</div>
              <div className="text-xs text-gray-500 font-medium">Equity Offered</div>
            </div>
            <div>
              <div className="text-xl font-black text-brand-dark">$2.6M</div>
              <div className="text-xs text-gray-500 font-medium">Valuation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
