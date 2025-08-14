import React, { useState } from 'react';

// const yogaPosesData = [
//   { 
//     id: 1, 
//     title: "Child's Pose (Balasana)", 
//     videoId: 'HD2VMv_R-lA', // New, working video ID
//     description: "A gentle, restorative pose that calms the brain, relieving stress and fatigue. It gently stretches the hips, thighs, and ankles while promoting a sense of grounding and introspection. It's an excellent resting pose to take between more challenging asanas." 
//   },
//   { 
//     id: 2, 
//     title: "Cat-Cow Pose (Marjaryasana-Bitilasana)", 
//     videoId: 'kqnua4rHVVA', // New, working video ID
//     description: "This dynamic flow connects movement with breath, creating a gentle massage for the spine and internal organs. By arching (Cow) and rounding (Cat) the back, it improves posture, balance, and spinal flexibility, making it a perfect warm-up for a yoga practice." 
//   },
//   { 
//     id: 3, 
//     title: "Bridge Pose (Setu Bandhasana)", 
//     videoId: 'NnbI-l_2g0E', // Kept this one as it was known to be working previously
//     description: "This pose can help alleviate stress and anxiety by opening the chest, heart, and shoulders. It's invigorating for the body and calming for the mind. Physically, it strengthens the back, glutes, and hamstrings, while also stimulating the abdominal organs and thyroid gland." 
//   },
//   { 
//     id: 4, 
//     title: "Legs-Up-the-Wall Pose (Viparita Karani)", 
//     videoId: 'xGaB2V2Q2-U', // New, working video ID
//     description: "An incredibly restorative and passive inversion that helps to quiet the nervous system. By reversing the effects of gravity, it improves circulation, relieves tired or swollen legs and feet, and can significantly reduce anxiety, stress, and insomnia." 
//   },
//   { 
//     id: 5, 
//     title: "Corpse Pose (Savasana)", 
//     videoId: '1_Iu_0o_W2c', // Kept this one as it was known to be working previously
//     description: "Often considered the most important and challenging pose, Savasana is the ultimate final relaxation. It allows the body to fully rest and integrate the benefits of the practice, leading to deep mental clarity, reduced blood pressure, and a profound sense of calm." 
//   },
//   { 
//     id: 6, 
//     title: "Seated Forward Bend (Paschimottanasana)", 
//     videoId: 'T8sgVyF4Ux4', // This was the one the user requested to keep
//     description: "This introspective forward fold provides a deep stretch for the entire back side of the body, from the heels to the neck. It calms the mind, relieves stress and mild depression, and stimulates the liver, kidneys, and ovaries, improving digestion." 
//   },
//   { 
//     id: 7, 
//     title: "Standing Forward Bend (Uttanasana)", 
//     videoId: 'g7Uv5f9d_yc', // New, working video ID
//     description: "As a mild inversion, this pose calms the brain by increasing blood flow, helping to relieve stress and mild depression. It provides a therapeutic stretch for the hamstrings, calves, and hips while stimulating the liver and kidneys." 
//   },
//   { 
//     id: 8, 
//     title: "Triangle Pose (Trikonasana)", 
//     videoId: 'S6gB0Q-v6Q4', // New, working video ID
//     description: "A quintessential standing pose that stretches and strengthens the entire body. It particularly opens the hips, groin, hamstrings, and side-body, while also strengthening the thighs, knees, and ankles. It improves digestion, reduces anxiety, and builds focus." 
//   },
//   { 
//     id: 9, 
//     title: "Eagle Pose (Garudasana)", 
//     videoId: '40nylTa-a4s', // New, working video ID
//     description: "This challenging balancing pose improves concentration and focus immensely. The wrapping of limbs creates a 'compress and release' action that is thought to improve circulation in the joints. It effectively releases tension in the shoulders, upper back, and hips." 
//   },
//   { 
//     id: 10, 
//     title: "Happy Baby Pose (Ananda Balasana)", 
//     videoId: 'v88mC1H5tRI', // New, working video ID
//     description: "A playful and calming pose that gently stretches the inner groins and the back of the spine. By releasing tension in the hips and lower back, it helps to alleviate stress and fatigue. Gently rocking side-to-side can also provide a light massage for the entire back." 
//   },
//   { 
//     id: 11, 
//     title: "Downward-Facing Dog (Adho Mukha Svanasana)", 
//     videoId: 'j9y3iSqax_w', // New, working video ID
//     description: "A foundational yoga pose that is both an energizing inversion and a restorative stretch. It builds strength in the arms, shoulders, and core while deeply stretching the hamstrings, calves, and spine. It improves circulation, calms the nervous system, and relieves fatigue." 
//   },
//   { 
//     id: 12, 
//     title: "Warrior II (Virabhadrasana II)", 
//     videoId: '4D4D_L62I2A', // New, working video ID
//     description: "A powerful standing pose that builds stamina, confidence, and concentration. It strengthens and stretches the legs, ankles, groin, and chest while opening the hips and shoulders. Holding the pose cultivates a sense of inner strength and empowerment." 
//   },
// ];


const yogaPosesData = [
  { 
    id: 1, 
    title: "Child's Pose (Balasana)", 
    videoId: '2MJGg-dUKh0', // Placeholder Video - PLEASE REPLACE
    description: "A gentle, restorative pose that calms the brain, relieving stress and fatigue. It gently stretches the hips, thighs, and ankles while promoting a sense of grounding and introspection. It's an excellent resting pose to take between more challenging asanas." 
  },
  { 
    id: 2, 
    title: "Cat-Cow Pose (Marjaryasana-Bitilasana)", 
    videoId: 'rpRnIsavO4k', // This one is working
    description: "This dynamic flow connects movement with breath, creating a gentle massage for the spine and internal organs. By arching (Cow) and rounding (Cat) the back, it improves posture, balance, and spinal flexibility, making it a perfect warm-up for a yoga practice." 
  },
  { 
    id: 3, 
    title: "Bridge Pose (Setu Bandhasana)", 
    videoId: 'hgtfNp8KywM', // Placeholder Video - PLEASE REPLACE
    description: "This pose can help alleviate stress and anxiety by opening the chest, heart, and shoulders. It's invigorating for the body and calming for the mind. Physically, it strengthens the back, glutes, and hamstrings, while also stimulating the abdominal organs and thyroid gland." 
  },
  { 
    id: 4, 
    title: "Legs-Up-the-Wall Pose (Viparita Karani)", 
    videoId: 'SnoFGPZTjs0', // Placeholder Video - PLEASE REPLACE
    description: "An incredibly restorative and passive inversion that helps to quiet the nervous system. By reversing the effects of gravity, it improves circulation, relieves tired or swollen legs and feet, and can significantly reduce anxiety, stress, and insomnia." 
  },
  { 
    id: 5, 
    title: "Corpse Pose (Savasana)", 
    videoId: '1VYlOKUdylM', // Placeholder Video - PLEASE REPLACE
    description: "Often considered the most important and challenging pose, Savasana is the ultimate final relaxation. It allows the body to fully rest and integrate the benefits of the practice, leading to deep mental clarity, reduced blood pressure, and a profound sense of calm." 
  },
  { 
    id: 6, 
    title: "Seated Forward Bend (Paschimottanasana)", 
    videoId: 'T8sgVyF4Ux4', // This one is working
    description: "This introspective forward fold provides a deep stretch for the entire back side of the body, from the heels to the neck. It calms the mind, relieves stress and mild depression, and stimulates the liver, kidneys, and ovaries, improving digestion." 
  },
  { 
    id: 7, 
    title: "Standing Forward Bend (Uttanasana)", 
    videoId: '0kOOvLPN23Q', // Placeholder Video - PLEASE REPLACE
    description: "As a mild inversion, this pose calms the brain by increasing blood flow, helping to relieve stress and mild depression. It provides a therapeutic stretch for the hamstrings, calves, and hips while stimulating the liver and kidneys." 
  },
  { 
    id: 8, 
    title: "Triangle Pose (Trikonasana)", 
    videoId: 'S6gB0QHbWFE', // Placeholder Video - PLEASE REPLACE
    description: "A quintessential standing pose that stretches and strengthens the entire body. It particularly opens the hips, groin, hamstrings, and side-body, while also strengthening the thighs, knees, and ankles. It improves digestion, reduces anxiety, and builds focus." 
  },
  { 
    id: 9, 
    title: "Eagle Pose (Garudasana)", 
    videoId: 'uI7l30smBaU', // Placeholder Video - PLEASE REPLACE
    description: "This challenging balancing pose improves concentration and focus immensely. The wrapping of limbs creates a 'compress and release' action that is thought to improve circulation in the joints. It effectively releases tension in the shoulders, upper back, and hips." 
  },
  { 
    id: 10, 
    title: "Happy Baby Pose (Ananda Balasana)", 
    videoId: 'Ppku7i3ypGM', // Placeholder Video - PLEASE REPLACE
    description: "A playful and calming pose that gently stretches the inner groins and the back of the spine. By releasing tension in the hips and lower back, it helps to alleviate stress and fatigue. Gently rocking side-to-side can also provide a light massage for the entire back." 
  },
  { 
    id: 11, 
    title: "Downward-Facing Dog (Adho Mukha Svanasana)", 
    videoId: 'zK1cLctwBsk', // Placeholder Video - PLEASE REPLACE
    description: "A foundational yoga pose that is both an energizing inversion and a restorative stretch. It builds strength in the arms, shoulders, and core while deeply stretching the hamstrings, calves, and spine. It improves circulation, calms the nervous system, and relieves fatigue." 
  },
  { 
    id: 12, 
    title: "Warrior II (Virabhadrasana II)", 
    videoId: 'kkGY3xBnaGc', // Placeholder Video - PLEASE REPLACE
    description: "A powerful standing pose that builds stamina, confidence, and concentration. It strengthens and stretches the legs, ankles, groin, and chest while opening the hips and shoulders. Holding the pose cultivates a sense of inner strength and empowerment." 
  },
];
const INITIAL_VISIBLE_POSES = 6;

const Yoga = () => {
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  // CSS for animations is injected via a <style> tag since @keyframes can't be inlined.
  const animationCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-animation {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  // Inline style objects for elements, removing the need for an external CSS file.
  const styles = {
    pageContainer: {
      fontFamily: "'Inter', sans-serif",
    },
    videoContainer: {
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 Aspect Ratio
      height: 0,
      overflow: 'hidden',
    },
    videoIframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div style={styles.pageContainer} className="bg-slate-900 text-gray-300">
      <style>{animationCSS}</style>
      
      {/* Header Section */}
      <header className="bg-black/50 text-white text-center py-12 md:py-20 border-b border-purple-500/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-purple-400">Yoga for Mental Wellness</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">Discover calming yoga poses to soothe your mind, reduce stress, and find inner peace.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {yogaPosesData.map((pose, index) => {
            const isInitiallyHidden = index >= INITIAL_VISIBLE_POSES;
            
            const animationClass = isInitiallyHidden && showAll ? 'fade-in-animation' : '';
            const hiddenClass = isInitiallyHidden && !showAll ? 'hidden' : '';
            const animationStyle = (isInitiallyHidden && showAll) 
              ? { animationDelay: `${(index - INITIAL_VISIBLE_POSES) * 100}ms` }
              : {};

            return (
              <div 
                key={pose.id}
                className={`bg-slate-800/50 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-900/60 ring-1 ring-purple-500/20 ${animationClass} ${hiddenClass}`}
                style={animationStyle}
              >
                <div style={styles.videoContainer}>
                  <iframe 
                    style={styles.videoIframe}
                    src={`https://www.youtube.com/embed/${pose.videoId}`} 
                    title={pose.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-400">{pose.title}</h2>
                  <p className="mt-2 text-gray-300">{pose.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-lg shadow-lg shadow-purple-500/50"
            >
              Show More Poses
            </button>
          </div>
        )}
      </main>

    </div>
  );
};

export default Yoga;