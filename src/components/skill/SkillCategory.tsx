import Image from "next/image";
import { useState } from "react";
import type { SkillCategoryProps } from "@/types/skill";

const SkillCategory = (props: SkillCategoryProps) => {
  const [selectSkill, setSelectSkill] = useState("Ops");
  return (
    <div>
      <ul className="mb-12 flex items-center justify-center text-sm font-medium text-center">
        {props.skillCategory.map((skillCategory) => (
          <div key={skillCategory.name} className="list-none">
            <div
              onClick={() => setSelectSkill(skillCategory.name)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectSkill(skillCategory.name);
                }
              }}
              role="button"
              tabIndex={0}
              style={{
                width: "200px",
                pointerEvents:
                  selectSkill === skillCategory.name ? "none" : "auto",
                background:
                  selectSkill === skillCategory.name ? "" : "transparent",
                cursor:
                  selectSkill === skillCategory.name ? "default" : "pointer",
                border: "none",
                color: selectSkill === skillCategory.name ? "white" : "black",
                backgroundColor:
                  selectSkill === skillCategory.name ? "black" : "",
                borderBottom: `2px solid black`,
              }}
            >
              {skillCategory.name}
            </div>
          </div>
        ))}
      </ul>
      <ul className="mb-12">
        {props.skillCategory.map((skillCategory) => (
          <div key={skillCategory.name}>
            {selectSkill === skillCategory.name && (
              <>
                <p className="mb-12 flex items-center justify-center">
                  {skillCategory.business}
                </p>
                <div className="flex items-center justify-center">
                  {skillCategory.business_skill.map((business_skill) => (
                    <div className="mx-6" key={business_skill.name}>
                      <Image
                        src={business_skill.image.url}
                        alt=""
                        width={80}
                        height={80}
                      />
                      <div
                        id={skillCategory.name}
                        className="flex items-center justify-center"
                      >
                        <b>{business_skill.name}</b>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
      <ul className="mb-12">
        {props.skillCategory.map((skillCategory) => (
          <div key={skillCategory.name}>
            {selectSkill === skillCategory.name && (
              <>
                <p className="mb-12 flex items-center justify-center">
                  {skillCategory.private}
                </p>
                <div className="flex items-center justify-center">
                  {skillCategory.private_skill.map((private_skill) => (
                    <div key={private_skill.name}>
                      <Image
                        src={private_skill.image.url}
                        alt=""
                        width={80}
                        height={80}
                      />
                      <div
                        id={skillCategory.name}
                        className="flex items-center justify-center"
                      >
                        <b>{private_skill.name}</b>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
