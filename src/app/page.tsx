"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Code, Globe, BookOpen, Activity, Database, Library, Zap, Users } from 'lucide-react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  bg?: string;
  textColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, bg = "bg-gray-800", textColor = "text-gray-200" }) => (
  <div id={id} className={`min-h-screen ${bg} ${textColor} flex flex-col justify-center items-center p-4 md:p-8 snap-start`}>
    <div className="w-full max-w-7xl text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  </div>
);

const IconText: React.FC<{ Icon: React.ElementType; text: string }> = ({ Icon, text }) => (
  <div className="flex items-center justify-center mb-2">
    <Icon size={20} className="mr-2 text-gray-400" />
    <span>{text}</span>
  </div>
);

const SkillCategory: React.FC<{ Icon: React.ElementType; title: string; skills: string[] }> = ({ Icon, title, skills }) => (
  <div className="my-10">
    <h3 className="text-xl font-semibold mb-3 flex items-center justify-center">
      <Icon size={24} className="mr-2 text-blue-400" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, index) => (
        <span key={index} className=" bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);


const ExperienceItem: React.FC<{ title: string; company: string; period: string; responsibilities: string[] }> = ({ title, company, period, responsibilities }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 flex flex-col items-center">
    <div className="flex flex-col items-center mb-4">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-gray-400 text-center">{company}</p>
      <p className="text-gray-400 text-center">{period}</p>
    </div>
    <ul className="list-disc list-inside text-left text-gray-300">
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);



const ProjectItem: React.FC<{ icon: React.ElementType; title: string; description: string; technologies: string[]; achievement: string }> = ({ icon: Icon, title, description, technologies, achievement }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <Icon size={24} className="text-blue-400 mr-3" />
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="mb-4">
      <h5 className="text-sm font-semibold text-gray-400 mb-2">เทคโนโลยีที่ใช้:</h5>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-blue-300 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h5 className="text-sm font-semibold text-gray-400 mb-2">ผลสำเร็จ:</h5>
      <p className="text-gray-300 italic">{achievement}</p>
    </div>
  </div>
);


export default function ModernCV() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        container.scrollBy({
          top: e.deltaY,
          behavior: 'smooth'
        });
      };
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-900 text-gray-200">
    <Section id="home" title="ประวัติส่วนตัว" bg="bg-gray-900">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
            <Image 
              src="/model.jpg" 
              alt="รูปโปรไฟล์" 
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">สมชาย ใจดี</h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-400">นักพัฒนาซอฟต์แวร์</p>
        </div>
        <div>
          <IconText Icon={Calendar} text="15 มีนาคม 2535" />
          <IconText Icon={MapPin} text="123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110" />
          <IconText Icon={Phone} text="081-234-5678" />
          <IconText Icon={Mail} text="somchai.j@email.com" />
        </div>
      </div>
    </Section>

    <Section id="education" title="การศึกษา" bg="bg-gray-900">
        <div className="text-center mb-6">
          <IconText Icon={GraduationCap} text="ปริญญาตรี สาขาวิศวกรรมซอฟต์แวร์" />
          <p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
          <p className="text-gray-400">2557 - 2561</p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
            <BookOpen size={28} className="mr-3 text-blue-400" />
            โครงงานที่สำคัญ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectItem 
              icon={Database}
              title="ระบบวิเคราะห์ข้อมูลการจราจรแบบเรียลไทม์"
              description="พัฒนาระบบวิเคราะห์ข้อมูลการจราจรโดยใช้ Machine Learning เพื่อคาดการณ์สภาพการจราจรและแนะนำเส้นทางที่เหมาะสม"
              technologies={["Python", "TensorFlow", "Kafka", "MongoDB"]}
              achievement="ลดเวลาการเดินทางในชั่วโมงเร่งด่วนได้เฉลี่ย 15% สำหรับผู้ใช้งานในกรุงเทพมหานคร"
            />
            <ProjectItem 
              icon={Activity}
              title="แอปพลิเคชันติดตามการออกกำลังกาย"
              description="สร้างแอปพลิเคชันมือถือสำหรับติดตามและวิเคราะห์กิจกรรมการออกกำลังกาย ใช้เทคโนโลยี React Native และ Firebase"
              technologies={["React Native", "Firebase", "Redux", "Google Fit API"]}
              achievement="ได้รับรางวัลชนะเลิศในการแข่งขัน Startup Thailand League ระดับมหาวิทยาลัย"
            />
            <ProjectItem 
              icon={Library}
              title="เว็บไซต์ระบบจัดการห้องสมุดออนไลน์"
              description="พัฒนาเว็บไซต์สำหรับจัดการระบบห้องสมุด รวมถึงระบบยืม-คืนหนังสือ และการค้นหาหนังสือออนไลน์"
              technologies={["React", "Node.js", "Express", "MySQL", "Docker"]}
              achievement="นำไปใช้งานจริงในห้องสมุดของมหาวิทยาลัย ช่วยเพิ่มประสิทธิภาพการทำงานของเจ้าหน้าที่ได้ 30%"
            />
          </div>
        </div>
      </Section>
      
      <Section id="experience" title="ประสบการณ์การทำงาน" bg="bg-gray-900">
  <div className="flex flex-col items-center py-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ExperienceItem 
        title="นักพัฒนาซอฟต์แวร์"
        company="บริษัท เทคโนโลยีไทย จำกัด"
        period="2561 - 2561"
        responsibilities={[
          "พัฒนาแอปพลิเคชันมือถือสำหรับลูกค้าองค์กร",
          "ดูแลและปรับปรุงระบบฐานข้อมูล"
        ]}
      />
       <ExperienceItem 
        title="นักพัฒนาซอฟต์แวร์"
        company="บริษัท เทคโนโลยีไทย จำกัด"
        period="2561 - 2561"
        responsibilities={[
          "พัฒนาแอปพลิเคชันมือถือสำหรับลูกค้าองค์กร",
          "ดูแลและปรับปรุงระบบฐานข้อมูล"
        ]}
      />
       <ExperienceItem 
        title="นักพัฒนาซอฟต์แวร์"
        company="บริษัท เทคโนโลยีไทย จำกัด"
        period="2561 - 2561"
        responsibilities={[
          "พัฒนาแอปพลิเคชันมือถือสำหรับลูกค้าองค์กร",
          "ดูแลและปรับปรุงระบบฐานข้อมูล"
        ]}
      />
      <ExperienceItem 
        title="ผู้ช่วยนักวิจัย"
        company="ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ"
        period="2559 - ปัจจุบัน"
        responsibilities={[
          "ช่วยพัฒนาอัลกอริทึมสำหรับการประมวลผลภาพ",
          "เขียนรายงานและนำเสนอผลการวิจัย"
        ]}
      />
     
    </div>
  </div>
</Section>



      <Section id="skills" title="ทักษะ" bg="bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Hard Skills</h2>
            <SkillCategory
              Icon={Code}
              title="การเขียนโปรแกรม"
              skills={["Java", "Python", "JavaScript", "SQL"]}
            />
            <SkillCategory
              Icon={Zap}
              title="เฟรมเวิร์คและเครื่องมือ"
              skills={["React Native", "Node.js", "Spring Boot", "Figma"]}
            />
            <SkillCategory
              Icon={Globe}
              title="ภาษา"
              skills={["ไทย (ภาษาแม่)", "อังกฤษ (ดี)"]}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-300">Soft Skills</h2>
            <SkillCategory
              Icon={Users}
              title="ทักษะการทำงานร่วมกัน"
              skills={["การทำงานเป็นทีม", "การสื่อสาร", "ความเป็นผู้นำ", "การแก้ไขปัญหา"]}
            />
            <SkillCategory
              Icon={Activity}
              title="ทักษะส่วนบุคคล"
              skills={["การจัดการเวลา", "ความคิดสร้างสรรค์", "การเรียนรู้ตลอดชีวิต", "ความยืดหยุ่น"]}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}