package picstory.backend.web.dto;

import picstory.backend.domain.PostCategory;

public record CreatePostrRequest(
        PostCategory category,
        String title,
        String content
) {
}
