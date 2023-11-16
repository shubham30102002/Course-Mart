import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLickedCourses = props.setLickedCourses;


    function clickHandler() {
        //logic
        if (likedCourses.includes(course.id)) {
            //liked course hai pehle se
            setLickedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Liked Removed");
        }
        else {
            //pehle se liked nhi hai
            //insert karna hai liked courses mein
            if (likedCourses == 0) {
                setLickedCourses([course.id]);
            }
            else {
                //non-empty hai add karenege
                setLickedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <buttton onClick={clickHandler} >
                        {
                            likedCourses.includes(course.id) ?
                            (<FcLike fontSize="1.75rem" />) :
                            (<FcLikePlaceholder fontSize="1.75rem" />) 
                        }
                    </buttton>
                </div>
            </div>

            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>{course.description}
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
