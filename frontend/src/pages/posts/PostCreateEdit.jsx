import React, { useEffect, useRef, useState } from 'react'
import './PostCreateEdit.scss'
import './PostPagesAll.scss'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { CATEGORY_OPTIONS } from '@/constants/category'
import PostTag from '@/components/posts/PostTag'
const PostCreate = () => {
  return (
    <section className='page post-section post-create'>
      <div className="inner">
        <form action="">
          <div className="post-card">
            <div className="post-field">
              <label className='post-label'>카테고리</label>
              <div className="post-input-wrap">
                <select >
                  {CATEGORY_OPTIONS.map((opt) => (

                    <option value={opt.value} key={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Input
              label="제목"
              name="title"
              placeholder="제목을 입력하세요"
            />
            <div className="post-tag-box">

              <div className="tags">
                <PostTag tag="tag1" />
                <input type="text" className='post-tag-input' placeholder='tag를 자유롭게 입력하세요' />
                <Button type="button" text="+태그 추가" className="post-tag-add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default PostCreate