import React, { useState } from 'react'
import "/src/index.css"
const Detailed = () => {
    const [border1,setBorder1] = useState(true);
  return (
    <div className=' sm:px-[4vw] md:px-[7vw] lg:px-[9vw] py-10  bg-[radial-gradient(circle_at_24.1%_68.8%,_rgb(50,50,50)_0%,_rgb(0,0,0)_99.4%)]'> 
   {/* <span><strong className={`text-gray-300 text-3xl font-bold pb-[2px] itim-regular  ${border1 ? "border-b-4 rounded-md border-red-300": "" } `} onMouseMove={()=>setBorder(!border1)} >Lift, Sweat, Conquer: Your Fitness Journey Awaits!</strong></span>  */}



{/* 
   <span>
  <strong 
    className={`text-gray-300 text-3xl font-bold pb-[2px] itim-regular  hover:border-b-2  border-red-300 `} 
  >
    Lift, Sweat, Conquer: Your Fitness Journey Awaits!
  </strong>
</span> */}
<span>
  <strong 
    className={`text-gray-300 text-3xl font-bold pb-[2px] itim-regular hover:border-b-2 hover:w-full w-0 border-transparent hover:border-red-300`} 
  >
    Lift, Sweat, Conquer: Your Fitness Journey Awaits!
  </strong>
</span>
    <div class=" mx-auto p-6 text-white" >
    <p class="text-white mb-4 text-xl">
        In a world where health and wellness have taken center stage, the call to action is clear: 
        <strong>Join the Fitness Revolution!</strong> This movement is more than just a trend; it’s a lifestyle transformation 
        that empowers individuals to embrace fitness as an integral part of their daily lives.
    </p>
    <p class="text-white mb-4">
        This movement invites everyone—whether you're a seasoned athlete or just starting out—to embark on a journey 
        toward better health and well-being.
    </p>
    
    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Understanding the Fitness Revolution</h2>
    <p class="text-white mb-4">
        The Fitness Revolution signifies a shift in how we perceive health and exercise. It’s about breaking down barriers, 
        debunking myths, and recognizing that fitness is for everyone. Gone are the days when fitness was solely associated 
        with bodybuilders or elite athletes. Today, it’s a celebration of diversity in body types, fitness levels, and personal goals.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Get Fit: The Benefits of Exercise</h2>
    <p class="text-white mb-4">
        Getting fit is not just a goal; it’s a journey filled with numerous benefits. Regular physical activity can improve 
        cardiovascular health, enhance muscular strength, boost metabolism, and increase overall energy levels.
    </p>
    <p class="text-white mb-4">
        Moreover, exercise is a powerful tool for mental health. Engaging in physical activity releases endorphins—often 
        referred to as "feel-good" hormones—that elevate mood and reduce feelings of stress and anxiety.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Stay Strong: Building Resilience</h2>
    <p class="text-white mb-4">
        Staying strong goes beyond physical strength; it encompasses mental resilience and emotional well-being. The 
        Fitness Revolution emphasizes the importance of developing a strong mindset. Life is full of challenges, and 
        cultivating resilience can help you navigate setbacks in both fitness and daily life.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">The Advantages of Joining Our Gym</h2>
    <ul class="list-disc list-inside text-white mb-4">
        <li><strong>State-of-the-Art Equipment:</strong> Our gym is equipped with the latest machines and free weights, ensuring 
            you have access to the best tools for your workouts.</li>
        <li><strong>Expert Guidance:</strong> Our certified trainers provide personalized workout plans, nutritional guidance, 
            and ongoing support to ensure you stay motivated and on track.</li>
        <li><strong>Variety of Classes:</strong> We offer diverse fitness classes, from high-intensity interval training (HIIT) 
            to yoga and Pilates.</li>
        <li><strong>Supportive Community:</strong> Joining our gym means becoming part of a welcoming community that shares your 
            fitness goals.</li>
        <li><strong>Flexible Hours:</strong> Our gym offers flexible hours, allowing you to work out when it’s most convenient 
            for you.</li>
        <li><strong>Focus on Health and Wellness:</strong> We provide resources on nutrition, mental health, and recovery, ensuring 
            a holistic approach to your health.</li>
        <li><strong>Access to Specialized Programs:</strong> We offer specialized programs tailored to different fitness levels 
            and goals.</li>
        <li><strong>Community Events and Challenges:</strong> Our gym frequently organizes fitness challenges and social gatherings.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Overcoming Obstacles</h2>
    <p class="text-white mb-4">
        Every fitness journey comes with its share of challenges. It’s essential to acknowledge that setbacks are a natural 
        part of the process. The Fitness Revolution teaches us to view these challenges as opportunities for growth.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">The Role of Nutrition</h2>
    <p class="text-white mb-4">
        As you join the Fitness Revolution, it’s important to recognize that nutrition plays a vital role in your fitness 
        journey. A balanced diet rich in whole foods provides the fuel your body needs to perform optimally.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Setting Personal Goals</h2>
    <p class="text-white mb-4">
        Joining the Fitness Revolution means setting and pursuing personal goals that resonate with you. Break your larger 
        goals into smaller, manageable milestones and celebrate these achievements along the way.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-6 mb-2">Conclusion</h2>
    <p class="text-white mb-4">
        The Fitness Revolution is an invitation to transform your life through movement, strength, and community. 
        With our gym’s state-of-the-art facilities, expert guidance, and supportive community, you’ll find the resources 
        and motivation you need to thrive.
    </p>
    <p class="text-white mb-4">
        Join the Fitness Revolution today, and discover the incredible strength that lies within you. Your journey to a 
        healthier, stronger you awaits!
    </p>
</div>

    </div>
  )
}

export default Detailed
